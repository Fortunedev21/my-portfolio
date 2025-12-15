import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Zap, Loader2 } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const SYSTEM_PROMPT = `Tu es Spark, l'assistant IA de Fortune Aiounou, developpeur web/mobile freelance au Benin.
Services: sites web, apps mobiles, IA, UI/UX. Tarifs: site 500k FCFA+, app 1.5M FCFA+.
Delais: 2-4 sem (site), 2-4 mois (app). Tech: React, Flutter, Python.
Reponds en francais, 2-3 phrases max, sois amical.`;

const fallbackResponses: Record<string, string> = {
  'bonjour': "Bonjour ! Comment puis-je vous aider ?",
  'salut': "Salut ! Que puis-je faire pour vous ?",
  'services': "Fortune propose : dev web, apps mobiles, solutions IA et UI/UX design. Visitez /services !",
  'tarif': "Site vitrine a partir de 500 000 FCFA, app mobile a partir de 1 500 000 FCFA. Contactez Fortune pour un devis !",
  'prix': "Site vitrine a partir de 500 000 FCFA, app mobile a partir de 1 500 000 FCFA. Contactez Fortune pour un devis !",
  'contact': "Contactez Fortune via /contact ou par email. Reponse sous 24h !",
  'delai': "2-4 semaines pour un site, 1-2 mois pour un e-commerce, 2-4 mois pour une app mobile.",
  'default': "Je peux vous renseigner sur les services, tarifs, delais ou contact. Que souhaitez-vous savoir ?"
};

const getFallback = (msg: string): string => {
  const m = msg.toLowerCase();
  for (const [key, val] of Object.entries(fallbackResponses)) {
    if (key !== 'default' && m.includes(key)) return val;
  }
  return fallbackResponses.default;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey ! Je suis Spark, l'assistant de Fortune. Comment puis-je vous aider ?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (userMessage: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) return getFallback(userMessage);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }]
            },
            contents: [{ parts: [{ text: userMessage }] }]
          })
        }
      );
      
      if (!res.ok) {
        console.log('API error, using fallback');
        return getFallback(userMessage);
      }
      
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || getFallback(userMessage);
    } catch {
      return getFallback(userMessage);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    const response = await sendMessage(userMessage);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setIsLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-orange-deep hover:bg-orange-light text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-orange-deep p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Zap size={20} className="text-white" />
            </div>
            <div>
              <p className="font-poppins font-semibold text-white">Spark</p>
              <p className="text-white/80 text-xs">En ligne</p>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  msg.isBot ? 'bg-white text-gray-anthracite shadow-sm' : 'bg-orange-deep text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl shadow-sm">
                  <Loader2 size={18} className="animate-spin text-orange-deep" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Votre message..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-deep"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-orange-deep hover:bg-orange-light text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
