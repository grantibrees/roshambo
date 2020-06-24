// Teleportation Circle, Chain Lightning, Wall of Force
// Chain Lightning beats Teleportation Circle  |  LbC
//    win description: "You electrocute the enemy wizard before they can teleport away!"
//    lose description: "The enemy wizard sends electricity through your body before you can escape!"

// Teleportation Circle beats Wall of Force  |  CbW
//    win description: "You escaped! The enemy wizard cast a useless wall!"
//    lose description: "The enemy wizard is escaped! You cast a Wall for no reason!"

// Wall of Force beats Chain Lightning  |  WbL
//    win description: "Your Wall blocks the enemy wizard's deadly power!"
//    lose description: "The enemy wizard blocks your electrical magic!"

// W  |  Wall of Force tie description: "You both hesitate... and both throw up Walls of Force!"
// C  |  Teleportation Circle tie description: "You both move out of the way of... nothing!"
// L  |  Chain Lightning tie description: "You both sling webs of lightning... that meet in the middle, sizzling into thin air!"


// What happens when you select a spell? It should input and draw your result into the player "slot".
// It should also generate a random (or semi random) wizard input and draw the result.
// Then, it needs to compare the two results (player and wizard), and put into an if statement. 


// Chain Lighting        = Rock
// Wall of Force         = Paper
// Teleportation Circle  = Scissors

let moveSet = {
  spells: [
    {
      img: "lightning.jpg",
      name: "Chain Lightning",
      inputName: "lightning"
  },
    {
      img: "circle.jpg",
      name: "Teleportation Circle",
      inputName: "circle"
    },
      {
        img: "wall.jpg",
        name: "Wall of Force",
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
      lose: "The enemy wizard is escaped! You cast a Wall for no reason!"
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
      tie: "You both sling webs of lightning... that meet in the middle, dissolving away into sparks!"
    },

    {
      condition: "Double Circle",
      tie: "You both teleport out of the way of... nothing!",
    },

    {
      condition: "Double Wall",
      tie: "You both hesitate... and both throw up useless Walls of Force!"
    }
  ]

}


function drawBattle(){
  // drawBattle will draw images, spell names, WIN/LOSE/TIE, battle description

}

function generateWizardSpell(){
    let spellIndex = Math.floor(Math.random() * moveSet.spells.length)
    let spell = moveSet.spells[spellIndex]
    return spell
}



function play(inputSpell){
  //generate a wizard spell and give it a variable name
  let wizardSpell = generateWizardSpell()

  //if the playerSpell (moveSet.spells.inputName) is equal to the inputSpell from the button, run the check to see which results should be sent
        if(inputSpell == "lightning" && wizardSpell.inputName == "circle"){
          // pull moveSet.spellResults.conditionName that equals "lbc"
            // hey, this one is lbc, so pull lbc win 
          // let lbcWin = moveSet.spellResults.find(lbc => lbc.conditionName == "lbc")
       
          let resultDescription = moveSet.spellResults.find(s => s.conditionName == "lbc")
          // return lbcWin.win
        
          document.getElementById("description").innerText = resultDescription.win

    
          
        }

  }

//this looks at the playerSpell and generateWizardSpell, and finds the spellResults that match.
function compareSpells(inputSpell, wizardSpell){
  //set the index for looking at the results
  // make the results variable that looks at the index of results by conditionName

  let resultsIndex = moveSet.spellResults.length
  let results = moveSet.spellResults[resultsIndex].conditionName

  let resultsFinder = moveSet.spellResults.find(finder => finder.conditionName == lbc)

}



//If player input lightning, and wizard input circle, then run win and win LbC description
//If player input lightning, and wizard input wall, then run lose and lose WbL description
//If player input lightning, and wizard input lightning, then run tie and tie L description

//If player input circle, and wizard input wall, then run win and win CbW description.
//If player input circle, and wizard input lightning, then run lose and lose LbC description
//If player input circle, and wizard input circle, then run tie and tie C description

//If player input wall, and wizard input lightning, then run win and win WbL description.
//If player input wall, and wizard input circle, then run lose and lose CbW description
//If player input wall, and wizard input wall, then run tie and tie W description













// Addons: Make a counter for the win/lose/tie count
// Addons: Make a countdown timer where the wizard strikes you down if you don't act quickly enough
// Addons: Make a little spell magic image between each battle
// Addons: L beats C beats W beats L. Make the Wizard slightly more likely to pick the result that would've lost against the thing the player played last. So if the player played Lightning (Rock), the Wizard's next move should be slightly more likely to be Circle (Scissors)
