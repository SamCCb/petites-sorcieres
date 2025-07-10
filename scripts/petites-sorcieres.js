Hooks.once("init", () => {
  console.log("Petites Sorci�res | Initialisation du syst�me");

  // D�claration du type d'acteur "sorciere"
  CONFIG.Actor.documentClass = PetitesSorcieresActor;

  // Enregistrement de la fiche
  Actors.registerSheet("petites-sorcieres", PetitesSorcieresSheet, {
    types: ["character"],
    label: "Fiche Sorci�re",
    makeDefault: true
  });
});

// D�finition de l'acteur personnalis�
class PetitesSorcieresActor extends Actor {
  prepareData() {
    super.prepareData();
    const data = this.system;
    // On pourrait ici calculer des valeurs automatiques (ex: total gentillesse)
  }
}

// D�finition de la fiche
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
    // Ajoute ici les interactions (bouton de d�s, effets magiques...)
  }
}
