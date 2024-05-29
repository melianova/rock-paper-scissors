'use strict';

console.log('Hello');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getHumanChoice() {
    const choice = prompt('Type 0 for rock, 1 for paper or 2 for scissors. Default: rock.');
    const choices = ['rock', 'paper', 'scissors'];
    return choices[choice];
}



function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            return "It's a draw!";
        }
        if (humanChoice === 'rock')
            if (computerChoice === 'paper') {
                ++computerScore;
                return 'You loose! Paper beats rock!';
            }
            if (computerChoice === 'scissors') {
                ++humanScore;
                return 'You win! Rock beats scissors!';
            }
        if (humanChoice === 'paper')
            if (computerChoice === 'scissors') {
                ++computerScore;
                return 'You loose! Scissors beat paper!';
            }
            if (computerChoice === 'rock') {
                ++humanScore;
                return 'You win! Paper beats rock!';
            }
        if (humanChoice === 'scissors')
            if (computerChoice === 'rock') {
                ++computerScore;
                return 'You loose! Rock beats scissors!';
            }
            if (computerChoice === 'paper') {
                ++humanScore;
                return 'You win! Scissors beat paper!';
            }
    }

    for (let i = 0; i < 5; ++i) {
        const result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result);
    }
}