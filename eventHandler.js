// The second IIFE should augment the original one with a function that creates
// all of the eventHandlers that you need for the application. Name the function
//activateEvents.
//build event handler function
var CarLot = (function(eventHandlers) {
  eventHandlers.activateEvents = function() {
    //build array for the the card
    var carCard = document.getElementsByClassName("card");
    //loop through the array listening for what element was clicked
    //when card is slected add the border and color and call the function
    //to change the text on the card  Requirement 8 & 9
    for (var i = 0; i < carCard.length; i++) {
      carCard[i].addEventListener("click", function (event, color){
        var selected = event.currentTarget;
        //if clicked change the border & color
        eventHandlers.addBorderThickness(selected);
        // call the clear text in the text box
        eventHandlers.clearText();
      });
    };
    //add event listener on text box area on key up and call function
    var enteredText = document.getElementById("textBox");
    enteredText.addEventListener("keyup", function(event, changedCarCard){
      //modify text on card requirement 9
      CarLot.editText();
    });
  };
  return eventHandlers
}(CarLot || {}));