import React from "react";

export default function Introduction() {
  return (
    <div className="bg-white p-6 rounded-3xl">
      <h1 className="text-xl font-bold text-gray-900 mb-2">
        Demande de restauration d'une archive Outlook.
      </h1>
      <p className="text-sm text-gray-700 leading-relaxed">
        Ci-dessous, vous avez une vue d'ensemble de la procédure pour traiter
        une demande de restauration d'une archive. Chacune des étapes est à
        appliquer consciencieusement — elle est décrite sur le panel à droite.
        La ligne verticale du graphique vous permet de voir les différents
        groupes d'affectation et leur temps d'intervention. Le graphique
        sinusoïdal illustre la différence entre le temps de traitement
        prédéfini et le temps réellement pris pour chaque phase.
      </p>
    </div>
  );
}