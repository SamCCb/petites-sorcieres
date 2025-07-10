Hooks.once("init", () => {
  console.log("Petites Sorcières | Initialisation du système");

  // Déclaration du type d'acteur "sorciere"
  CONFIG.Actor.documentClass = PetitesSorcieresActor;

  // Enregistrement de la fiche
  Actors.registerSheet("petites-sorcieres", PetitesSorcieresSheet, {
    types: ["character"],
    label: "Fiche Sorcière",
    makeDefault: true
  });
});

// Définition de l'acteur personnalisé
class PetitesSorcieresActor extends Actor {
  prepareData() {
    super.prepareData();
    const data = this.system;
    // On pourrait ici calculer des valeurs automatiques (ex: total gentillesse)
  }
}

// Définition de la fiche
class PetitesSorcieresSheet extends ActorSheet {
  get template() {
    return "systems/petites-sorcieres/template/actor-sheet.html";
  }

  getData() {
    const data = super.getData();
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Ajoute ici les interactions (bouton de dés, effets magiques...)
  }
}
