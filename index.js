document.querySelector('.roll').addEventListener('click', () => {
    // Define an array of dice images
    const title = document.querySelector('.heading');
    const diceImages = [
        './images/dice1.png',
        './images/dice2.png',
        './images/dice3.png',
        './images/dice4.png',
        './images/dice5.png',
        './images/dice6.png'
    ];

    // Generate random numbers for both dice
    const randomNumber1 = Math.floor(Math.random() * 6); // Generates a random number between 0 and 5
    const randomNumber2 = Math.floor(Math.random() * 6); // Generates a random number between 0 and 5

    // Update dice images based on the random numbers
    document.querySelectorAll('.die')[0].src = diceImages[randomNumber1];
    document.querySelectorAll('.die')[1].src = diceImages[randomNumber2];

    // Update the heading with the correct message and preserve styles
    if (randomNumber1 > randomNumber2) {
        title.textContent = "Player 1 Wins!!";
        
    } else if (randomNumber1 < randomNumber2) {
        title.textContent = "Player 2 Wins!!";
    } else {
        title.textContent = "It's a Draw!";
    }
});
