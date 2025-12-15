import React from 'react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-white-soft pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-12">
          Mentions Legales
        </h1>

        <div className="space-y-10 font-inter text-blue-gray">
          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-4">Editeur du site</h2>
            <p>Fortune Aiounou</p>
            <p>Developpeur Web & Mobile Freelance</p>
            <p>Benin</p>
            <p>Email : contact@fortune-aiounou.com</p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-4">Hebergement</h2>
            <p>Ce site est heberge par Vercel Inc.</p>
            <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-4">Propriete intellectuelle</h2>
            <p className="mb-4">
              L'ensemble du contenu de ce site (textes, images, logos, code source) est protege par le droit d'auteur. 
              Toute reproduction, meme partielle, est interdite sans autorisation prealable.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-4">Politique de confidentialite</h2>
            <p className="mb-4">
              Les donnees personnelles collectees via le formulaire de contact sont utilisees uniquement pour repondre a vos demandes. 
              Elles ne sont jamais transmises a des tiers.
            </p>
            <p>
              Conformement au RGPD, vous disposez d'un droit d'acces, de modification et de suppression de vos donnees. 
              Pour exercer ce droit, contactez-moi par email.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies techniques necessaires a son fonctionnement. 
              Aucun cookie publicitaire ou de tracking n'est utilise.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-4">Responsabilite</h2>
            <p>
              Les informations presentes sur ce site sont fournies a titre indicatif. 
              Je m'efforce de les maintenir a jour mais ne peux garantir leur exactitude a tout moment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
