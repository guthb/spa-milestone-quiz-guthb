// The first IIFE should add a public function (e.g. loadInventory) that loads the 
// inventory.json file and stores the inventory in a private variable. It should also 
// expose a public getter to read the array of cars (e.g. getInventory).

console.log("Quiz");

//build string for the array from the frist iffe object pulled from the JSON file
function populatePage (inventory, cars) {
  
  var carDomContainer = document.getElementById("cardHolder")
  var buildInventoryString;

  // Loop over the inventory and populate the page 
  for (var i = 0; i < inventory.length; i++) {
      //buildInventoryString =  `<div class="row">`;
      //buildInventoryString =  `<div class="container">`;
      buildInventoryString = `<div class="col-md-4 card" style="border: 2px solid ${inventory[i].color};">`;
      buildInventoryString += `<h2>${inventory[i].make}</h2>`;
      buildInventoryString += `<h2>${inventory[i].model}</h2>`;
      buildInventoryString += `<h4>Year: ${inventory[i].year}</h4>`;
      buildInventoryString += `<h5>Price: $${inventory[i].price}</h5>`;
      buildInventoryString += `<p>${inventory[i].description}</p>`;
      buildInventoryString += `</div>`;
      // buildInventoryString += `</div>`;
      // buildInventoryString += `</div>`;  
      carDomContainer.innerHTML += buildInventoryString;
      console.log("Inventory String",buildInventoryString);
  };
   
  // Now that the DOM is loaded, establish all the event listeners needed
  cars.activateEvents();
  
};

//call the public load inventory setter but use the public  getter
CarLot.loadInventory(buildDomOutput);

function buildDomOutput() {
  var carLotInventory = CarLot.getInventory();
  populatePage(carLotInventory, CarLot)

};

