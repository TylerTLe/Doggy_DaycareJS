/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let daysSelected = 0;
let totalCost = 0;
const calculatedCost = document.getElementById("calculated-cost");

const dayButtons = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleButton(button) {
  button.classList.toggle("clicked");

  if (button.classList.contains("clicked")) {
    daysSelected += 1;
  } else {
    daysSelected -= 1;
  }
}

function handleClick(e) {
  e.preventDefault();
  toggleButton(e.target);
}

for (const day of dayButtons) {
  const button = document.getElementById(day);
  button.addEventListener("click", handleClick);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.onclick = function(e) {
  for (const day of dayButtons) {
    const button = document.getElementById(day);
    button.classList.remove("clicked");
  }

  halfButton.classList.remove("clicked");
  fullButton.classList.remove("clicked");
  totalCost = 0;
  daysSelected = 0;
  recalculate();
};

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function handleButtonClick(e) {
  e.preventDefault();

  if (e.target === halfButton) {
    costPerDay = 20;
    halfButton.classList.toggle("clicked");
    fullButton.classList.remove("clicked");
  } else if (e.target === fullButton) {
    costPerDay = 35;
    fullButton.classList.toggle("clicked");
    halfButton.classList.remove("clicked");
  }
  
  totalCost = costPerDay * daysSelected;
  recalculate();
}

halfButton.addEventListener("click", handleButtonClick);
fullButton.addEventListener("click", handleButtonClick);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
  calculatedCost.textContent = totalCost;
}
