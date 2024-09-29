// script.js

// Function to randomize the letters of a string
function randomizeText(element, originalText) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const textArray = originalText.split('');

    setInterval(() => {
        const newText = textArray.map(char => {
            if (char !== ' ') {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return char; // keep spaces unchanged
        }).join('');
        element.textContent = newText;
    }, 100);  // Change letters every 100 milliseconds
}

// Call the randomizer for each header
window.onload = function () {
    for (let i = 1; i <= 9; i++) {
        const header = document.getElementById(`header${i}`).querySelector('span');
        randomizeText(header, `Select an option`);
    }
};

// Function to handle dropdown changes
function handleDropdownChange(level) {
    const nextDropdownId = `dropdown${level + 1}-container`;

    // Show the next dropdown if it exists
    if (document.getElementById(nextDropdownId)) {
        document.getElementById(nextDropdownId).classList.remove('hidden');
        document.getElementById(nextDropdownId).classList.add('visible');
    }
}