import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReactPlayer from 'react-player'
import './navbar.css'
function Accueil() {
  return (
    <>
      <Header />
      <div className="t">
        <div className="titre2">
          <h3 className="h3">
            Syndic <span className="span">Coopératif</span>
          </h3>
          <p className="tpara">Automatisation de vos taches dans la copropriété</p>

          <div className="button-container"></div>
          <button className="button1">Obtenir un devis gratuit</button>
        </div>

        <div className="titre2">
          <h3 className="h3">
            Multi- <span className="span">Copropriété</span>
          </h3>
          <p className="tpara">
            Vous pouvez gerer toutes votre copropriété dans une seule plateforme
          </p>
          <button className="button1">Obtenir un devis gratuit</button>
        </div>
      </div>

      <div>
        <h3 className="titre3">Pourquoi choisir GEPIXBIM Syndic</h3>

        <div className="container">
          <div >
            <h5 className="h5">Gestion des évenements</h5>
            <ul className="border">
              <li>Planification simplifié</li>
              <li>Communication efficace</li>
              <li>Suivi et évaluation</li>
            </ul>
          </div>
          <div>
            <h5 className="h5">Gestion de l'A.G</h5>
            <ul className="border">
              <li>Planification automatiquement</li>
              <li>Participation à distance</li>
              <li>Vote en ligne</li>
            </ul>
          </div>
          <div>
            <h5 className="h5">Gestion de l'appel de fond</h5>
            <ul className="border">
              <li>Automatisation des appels de fonds</li>
              <li>Suivi transparent</li>
              <li>Relances automatisées</li>
            </ul>
          </div>
        </div>


        <div className="container">
          <div>
            <h5 className="h5">Communication</h5>
            <ul  className="border">
              <li>Extranet dans la copropriété</li>
              <li>Communication en temps reel</li>
              <li>Gestion de sinstre</li>
            </ul>
          </div>
          <div>
            <h5 className="h5">Fournisseurs</h5>
            <ul className="border">
              <li>Planification simplifiée</li>
              <li>Communication efficace</li>
              <li>Suivi et evaluation</li>
            </ul>
          </div>
          <div>
            <h5 className="h5">Gestion de documents</h5>
            <ul className="border">
              <li>Stocker les documents de la copropriété</li>
              <li>Consulter et telecharger</li>
              <li>Modifier</li>
            </ul>
          </div>
        </div>

      <div className="button-container">
      <button className="voirplus">Voir plus</button>

      </div>

      </div>


      <div className="video">
        <h3 className="titre3">Decouvrez notre logiciel</h3>
        <ReactPlayer url='https://youtu.be/EyHSWJdDyXA' />
        <br />
          <button className="button1">Demander votre démo</button>
        
      </div>
      <Footer />
    </>
  );
}

export default Accueil;
