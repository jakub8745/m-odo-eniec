//const sentence = prompt("Enter a sentence:");
function getRandomSentence() {
    //const sentence = ["Kolczyki", "pytań", "lichwiarz", "wziął", "na", "zastaw"];
    const sentence = ["Bo ziemia","– jedna;", "wszędzie", "jedna ziemia"]
    const randomIndex = Math.floor(Math.random() * sentence.length);
    const randomWord = sentence[randomIndex];
    console.log(randomWord);

    const outputElement = document.getElementById("output");
    outputElement.innerHTML = ''; // Clean the output element before appending new letters

    const gridSize = Math.ceil(Math.sqrt(randomWord.length));
    outputElement.style.display = "grid";
    outputElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // Square grid
    outputElement.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; // Square grid
    outputElement.style.gap = `${getRandomSpacing()} ${getRandomSpacing()}`; // Random gaps between letters and lines

    randomWord.split('').forEach((letter, index) => {
        const letterElement = document.createElement('span');
        letterElement.classList.add('letter');

        // Skip spaces to avoid animation
        if (letter === ' ') {
            letterElement.innerHTML = '&nbsp;'; // Preserve space
        } else {

            // Apply random styles
            letterElement.style.fontSize = getRandomFontSize();
            letterElement.style.fontWeight = getRandomFontWeight();
            letterElement.style.fontFamily = getRandomFontFamily();
            letterElement.style.textTransform = getRandomCase(letter) === letter.toUpperCase() ? 'uppercase' : 'lowercase';

            // Randomize space between letters
            letterElement.style.marginRight = getRandomSpacing();

            // Apply random animations with random time
            applyRandomAnimations(letterElement);

            letterElement.textContent = letter;
        }

        outputElement.appendChild(letterElement);
    });
    return randomWord;
}
//const sentence = "Kolczyki pytań lichwiarz wziął na zastaw";

setInterval(getRandomSentence, 5000);
const sentence = getRandomSentence();


// Define the size of the grid (square root of total letters)



function getRandomFontSize() {
    return Math.floor(Math.random() * (100 - 4 + 1)) + 64 + "px";
}

function getRandomFontWeight() {
    return Math.random() > 0.5 ? '700' : '900';
}

function getRandomCase(letter) {
    return Math.random() > 0.5 ? letter.toUpperCase() : letter.toLowerCase();
}

function getRandomAnimation() {
    const animations = [
        'bounce', 'rotate', 'fadeInOut', 'scaleUpDown', 'slideIn',
        'slideOut', 'shake', 'pulse', 'flip', 'skew', 'swing', 'wobble'
    ];
    return animations[Math.floor(Math.random() * animations.length)];
}

function getRandomFontFamily() {
    const fonts = [
        "Anton SC, sans-serif",
        "Sigmar, sans-serif ",
        "Climate Crisis, sans-serif",
        "Dela Gothic One, sans-serif",
    ];
    return fonts[Math.floor(Math.random() * fonts.length)];
}

function getRandomSpacing() {
    return Math.floor(Math.random() * 10) + 5 + "px"; // Random spacing between 5px and 25px
}

function getRandomAnimationDuration() {
    return (Math.random() * 10 + 1).toFixed(2) + "s"; // Random duration between 1s and 4s
}

function getRandomAnimationDelay() {
    return (Math.random() * 2).toFixed(2) + "s"; // Random delay between 0s and 2s
}

function applyRandomAnimations(letterElement) {
    const animation1 = getRandomAnimation();
    const animation2 = getRandomAnimation();

    // Apply random duration and delay
    const duration = getRandomAnimationDuration();
    const delay = getRandomAnimationDelay();

    letterElement.style.animation = `${animation1} ${duration} ${delay} infinite, ${animation2} ${duration} ${delay} infinite`;

    // Change the animations after a set time
    setTimeout(() => {
        applyRandomAnimations(letterElement);
    }, parseFloat(duration) * 1000); // Use the duration to control when to change
}

// Split the sentence into letters


// Adjust the layout into a square grid
