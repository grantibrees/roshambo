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

function play(){
  // run generate wizard spell
  generateWizardSpell()
  
  if(){

  }
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














// Addons: Make a countdown timer where the wizard strikes you down if you don't act quickly enough

