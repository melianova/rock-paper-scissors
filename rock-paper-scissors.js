'use strict';

console.log('Hello');

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