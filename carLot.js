// Create one global variable (e.g. CarLot) and use the IIFE pattern 
// to augment it two times in separate JavaScript files.
// this is the first IFFE & will perform the call to the JSON file, parse and build
// the JS object to be used for the car lot objective.

var CarLot = (function () {
  //define array for object population from the XHR
  var inventory = [];
  return {
    //It should also expose a public getter to read the array of cars 
    getInventory: function () {
      return inventory;  
    },    
    //function that pulls from the JSON for the inventory
    loadInventory: function (callbackToInvoke) {
      // When your page first loads, you need to use an XHR to load 
      //the contents of the JSON file, and parse them into a native 
      //JavaScript object.
      // create the XHR
      var inventoryLoader = new XMLHttpRequest();     
      //listen for when the load event is broadcast
      inventoryLoader.addEventListener("failed", executeOnFailure);  
      inventoryLoader.addEventListener("load", executeOnSuccess);
      //tell the XHR exactly what to do
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      //evaluate and on success load the object returned
      function executeOnFailure() {
          alert("Error loading page, Please open dev tools")
      };
      // Set the value of the private array
      function executeOnSuccess() {
        inventory = JSON.parse(this.responseText).cars;
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // inventory array as an argument. 
        callbackToInvoke(inventory);
      };
    },    
  };
 
})(CarLot || {});

