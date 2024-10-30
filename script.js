// YOUR CODE HERE

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

// Section 1: Favorite Color
const radioButtons = document.querySelectorAll('input[name="fav_color"]');
const radioOutput = document.getElementById('radio-output');

radioButtons.forEach((button) => {
  button.addEventListener('change', (e) => {
    const selectedColor = e.target.value;
    const colorEmoji = {
      'blue': '💙',
      'green': '💚',
      'pink': '💕',
      'black': '🖤'
    };
    
    radioOutput.textContent = `You picked ${selectedColor} ${colorEmoji[selectedColor] || ''}`;
    radioOutput.classList.remove('sr-only');
  });
});


// Section 2: Number Guessing Game
const numInput = document.getElementById('num-input');
const numOutput = document.getElementById('num-output');
let randomNumber = Math.floor(Math.random() * 100) + 1;

numInput.addEventListener('input', () => {
  const userGuess = Number(numInput.value);
  if (userGuess === randomNumber) {
    numOutput.textContent = `Correct! The number was ${randomNumber}.`;
    numOutput.classList.remove('sr-only');
    randomNumber = Math.floor(Math.random() * 100) + 1; // Reset for a new game
  } else if (userGuess < randomNumber && userGuess) {
    numOutput.textContent = 'Too low! Try again.';
    numOutput.classList.remove('sr-only');
  } else if (userGuess > randomNumber && userGuess) {
    numOutput.textContent = 'Too high! Try again.';
    numOutput.classList.remove('sr-only');
  } else {
    numOutput.textContent = ''; // Clear output if no valid guess
  }
});

// Section 3: Name All 7 Continents
const textInput = document.getElementById('text-input');
const continentImages = document.querySelectorAll('#continent-images img');
const srContinentAlert = document.getElementById('sr-continent-alert');
let guessedContinents = [];

textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { // Trigger action on Enter key
    const userInput = e.target.value.toLowerCase();
    const continents = {
      'north america': 'north-america',
      'europe': 'europe',
      'asia': 'asia',
      'south america': 'south-america',
      'africa': 'africa',
      'australia': 'australia',
      'antarctica': 'antarctica',
    };

    if (continents[userInput]) {
      if (!guessedContinents.includes(userInput)) {
        guessedContinents.push(userInput);
        srContinentAlert.textContent = `Yes! ${userInput.charAt(0).toUpperCase() + userInput.slice(1)} is a continent. ${guessedContinents.length} out of 7.`;
        document.getElementById(continents[userInput]).classList.remove('hidden'); // Reveal the image
      } else {
        srContinentAlert.textContent = `${userInput.charAt(0).toUpperCase() + userInput.slice(1)} has already been selected.`;
      }
    } else {
      srContinentAlert.textContent = `${userInput.charAt(0).toUpperCase() + userInput.slice(1)} is not a continent.`;
    }

    srContinentAlert.classList.remove('sr-only');
    e.target.value = ''; // Clear input after submission

    // Check if all continents have been guessed
    if (guessedContinents.length === 7) {
      srContinentAlert.textContent = 'Congratulations! You have named all 7 continents!';
    }
  }
});

// Section 4: Background Color Changer
const colorInput = document.getElementById('color-input');
const robotCheck = document.getElementById('robot-check');
const changeBgBtn = document.getElementById('change-bg-btn');
const bgChangeOutput = document.getElementById('bg-change-output');

changeBgBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload
  if (robotCheck.checked) {
    document.body.style.backgroundColor = colorInput.value; // Change background color
    bgChangeOutput.textContent = `Background color changed to ${colorInput.value}.`;
  } else {
    bgChangeOutput.textContent = "Background color not changed. Please, select 'I'm not a robot'.";
  }
  bgChangeOutput.classList.remove('sr-only');
});
