// Teleportation Circle, Chain Lightning, Wall of Force

// Chain Lighting        = Rock
// Wall of Force         = Paper
// Teleportation Circle  = Scissors

//ANCHOR moveSet - spell and spellResults
let moveSet = {
  spells: [
    {
      img: "lightning.jpg",
      name: "Chain Lightning!",
      inputName: "lightning"
  },
    {
      img: "circle.jpg",
      name: "Teleportation Circle!",
      inputName: "circle"
    },
      {
        img: "wall.jpg",
        name: "Wall of Force!",
        inputName: "wall"
      }
    ],

  spellResults: [
    {
      condition: "Lightning Beats Circle",
      conditionName: "lbc",
      win: "You electrocute the enemy wizard before they can teleport away!",
      lose: "The enemy wizard sends electricity through your body before you can escape!"
    },

    {
      condition: "Circle Beats Wall",
      conditionName: "cbw",
      win: "You escaped! The enemy wizard cast a pointless wall!",
      lose: "The enemy wizard has escaped! You cast a Wall for no reason!"
    },

    {
      condition:   "Wall Beats Lightning",
      conditionName: "wbl",
      win: "Your Wall blocks the enemy wizard's deadly power!",
      lose: "The enemy wizard blocks your electrical magic!"
    }],
  
  tieResults: [
    {
      condition: "Double Lightning",
      conditionName: "dl",
      tie: "You both sling webs of lightning... that meet in the middle, dissolving away into sparks!"
    },

    {
      condition: "Double Circle",
      conditionName: "dc",
      tie: "You both teleport out of the way of... nothing!",
    },

    {
      condition: "Double Wall",
      conditionName: "dw",
      tie: "You both hesitate... and both throw up useless Walls of Force!"
    }
  ]

}



function drawBattle(){
  // drawBattle will draw images, spell names, WIN/LOSE/TIE, battle description

  let playerImageElem = document.getElementById("player-image");
  let playerSpellNameElem = document.getElementById("player-spell-name");
  
  let wizardImageElem = document.getElementById("wizard-image");
  let wizardSpellNameElem = document.getElementById("wizard-spell-name");

  let playerSpellHolder = window.localStorage.getItem("playerSpellName")
  let currentPlayerSpellImage = moveSet.spells.find(m => m.inputName == playerSpellHolder);


  let wizardSpellHolder = window.localStorage.getItem("wizardSpellName")
  let currentWizardSpellImage = moveSet.spells.find(m => m.inputName == wizardSpellHolder);


  console.log(currentPlayerSpellImage);
  
  playerImageElem.src = currentPlayerSpellImage.img
  playerSpellNameElem.innerText = currentPlayerSpellImage.name

  wizardImageElem.src = currentWizardSpellImage.img
  wizardSpellNameElem.innerText = currentWizardSpellImage.name


}



// Hides the placeholder text
function textHider(){
  document.getElementById("description-holder").classList.add("hidden")
  document.getElementById("result-holder").classList.add("hidden")
  document.getElementById("ques-one").classList.remove("col-auto")
  document.getElementById("ques-one").classList.add("hidden")
  document.getElementById("ques-two").classList.remove("col-auto")
  document.getElementById("ques-two").classList.add("hidden")
  document.getElementById("player-spell-name").classList.add("col-auto")
  document.getElementById("wizard-spell-name").classList.add("col-auto")
  
}

function generateWizardSpell(){
    let spellIndex = Math.floor(Math.random() * moveSet.spells.length)
    let spell = moveSet.spells[spellIndex]
    return spell
}

// //#region NOTE "If" logic for the inputs in simple english
//If player input lightning, and wizard input circle, then run win and win LbC description
//If player input lightning, and wizard input wall, then run lose and lose WbL description
//If player input lightning, and wizard input lightning, then run tie and tie L description

//If player input circle, and wizard input wall, then run win and win CbW description.
//If player input circle, and wizard input lightning, then run lose and lose LbC description
//If player input circle, and wizard input circle, then run tie and tie C description

//If player input wall, and wizard input lightning, then run win and win WbL description.
//If player input wall, and wizard input circle, then run lose and lose CbW description
//If player input wall, and wizard input wall, then run tie and tie W description
//#endregion

function play(inputSpell){
  textHider()

  //generate a wizard spell and give it a variable name for reference in the if statements
  let wizardSpell = generateWizardSpell()
  window.localStorage.setItem("playerSpellName", inputSpell)
  window.localStorage.setItem("wizardSpellName", wizardSpell.inputName)


  //if moveSet.spells.inputName is equal to the inputSpell from the button, run the check to see which results should be sent
  // #region ANCHOR inputSpell is "lightning"
  if(inputSpell == "lightning" && wizardSpell.inputName == "circle"){
    // let spellOutput = "lightning"
    let resultDescription = moveSet.spellResults.find(s => s.conditionName == "lbc")
    document.getElementById("description").innerText = resultDescription.win
    document.getElementById("win-lose-tie").innerText = "Win"
  };

  if(inputSpell == "lightning" && wizardSpell.inputName == "wall"){

    let resultDescription = moveSet.spellResults.find(s => s.conditionName == "wbl")
    document.getElementById("description").innerText = resultDescription.lose
    document.getElementById("win-lose-tie").innerText = "Lose"
  };

  if(inputSpell == "lightning" && wizardSpell.inputName == "lightning"){

    let resultDescription = moveSet.tieResults.find(s => s.conditionName == "dl")
    document.getElementById("description").innerText = resultDescription.tie
    document.getElementById("win-lose-tie").innerText = "Draw"
  };
  //#endregion

  // #region ANCHOR inputSpell is "wall"
  if(inputSpell == "wall" && wizardSpell.inputName == "lightning"){

    let resultDescription = moveSet.spellResults.find(s => s.conditionName == "wbl")
    document.getElementById("description").innerText = resultDescription.win
    document.getElementById("win-lose-tie").innerText = "Win"
  };

  if(inputSpell == "wall" && wizardSpell.inputName == "circle"){

    let resultDescription = moveSet.spellResults.find(s => s.conditionName == "cbw")
    document.getElementById("description").innerText = resultDescription.lose
    document.getElementById("win-lose-tie").innerText = "Lose"
  };

  if(inputSpell == "wall" && wizardSpell.inputName == "wall"){

    let resultDescription = moveSet.tieResults.find(s => s.conditionName == "dw")
    document.getElementById("description").innerText = resultDescription.tie
    document.getElementById("win-lose-tie").innerText = "Draw"
  };
  //#endregion

  // #region ANCHOR inputSpell is "circle"
  if(inputSpell == "circle" && wizardSpell.inputName == "wall"){

    let resultDescription = moveSet.spellResults.find(s => s.conditionName == "cbw")
    document.getElementById("description").innerText = resultDescription.win
    document.getElementById("win-lose-tie").innerText = "Win"
  };
  
  if(inputSpell == "circle" && wizardSpell.inputName == "lightning"){

    let resultDescription = moveSet.spellResults.find(s => s.conditionName == "lbc")
    document.getElementById("description").innerText = resultDescription.lose
    document.getElementById("win-lose-tie").innerText = "Lose"
  };
  
  if(inputSpell == "circle" && wizardSpell.inputName == "circle"){
  
    let resultDescription = moveSet.tieResults.find(s => s.conditionName == "dc")
    document.getElementById("description").innerText = resultDescription.tie
    document.getElementById("win-lose-tie").innerText = "Draw"
  };
  //#endregion

    drawBattle();

  }



// #region NOTE Future Addons
// Addons: Make a counter for the win/lose/tie count
// Addons: Make a countdown timer where the wizard strikes you down if you don't act quickly enough
// Addons: Make a little spell magic image between each battle
// Addons: L beats C beats W beats L. Make the Wizard slightly more likely to pick the result that would've lost against the thing the player played last. So if the player played Lightning (Rock), the Wizard's next move should be slightly more likely to be Circle (Scissors)
//#endregion
