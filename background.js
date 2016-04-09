//The final IIFE should augment the object with two more functions.
//One function resets the border thickness and background color for each car
//element back to the original values. The other function changes the thickness
//of the border of a car element, and changes its background color. The
//function must accept two arguments. A car DOM element that was clicked on
//& A color name
var CarLot = (function(background) {
  background.resetBorderThickness = function() {
  //function resets the border thickness and background color for each car
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
       cards[i].style.borderWidth = "thin";
       cards[i].classList.remove("userSelected");
     };
  };
  //function changes the thickness of the border of a car element, and changes its background color.
  background.addBorderThickness = function(selected) {
    background.resetBorderThickness();
    selected.style.borderWidth = "thick";
    selected.classList.add("userSelected");
  };
  //function  that replaces the value from the text box
  background.editText = function() {
    var carListing = document.getElementById("textBox").value;
    var selectedCard = document.getElementsByClassName("userSelected")
    //Check for nulls on the selected card
    if (selectedCard.length > 0) {
      var descritption = selectedCard[0].getElementsByTagName("p");
      descritption[0].innerHTML = carListing;
    }
  };
  //function that clears the value from the text box and sets cursor focus
  background.clearText = function () {
    document.getElementById("textBox").value = "";
    document.getElementById("textBox").focus();
  }
  return background
})(CarLot || {});