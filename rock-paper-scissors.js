'use strict';

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
const resultsDisplay = document.querySelector('.results.display');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const humanChoice = e.target.innerText;
        const result = playRound(humanChoice, getComputerChoice());
        console.log(resultsDisplay);
        resultsDisplay.innerText = `${result}\n`;
        resultsDisplay.innerText += `Human: ${humanScore}, Computer: ${computerScore}`;
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    }
    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            ++computerScore;
            return 'You loose! Paper beats rock!';
        }
        if (computerChoice === 'scissors') {
            ++humanScore;
            return 'You win! Rock beats scissors!';
        }
    }
    if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            ++computerScore;
            return 'You loose! Scissors beat paper!';
        }
        if (computerChoice === 'rock') {
            ++humanScore;
            return 'You win! Paper beats rock!';
        } 
    }
    if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            ++computerScore;
            return 'You loose! Rock beats scissors!';
        }
        if (computerChoice === 'paper') {
            ++humanScore;
            return 'You win! Scissors beat paper!';
        }
    }
}