#! /usr/bin/env node
import chalk from "chalk";

import inquirer from "inquirer";

import chalkanimation from "chalk-animation";

// 1) Computer will generate a random number - Done

// 2) User input for guessing number - Done

// 3) Compare user input with computer generated number and show result

async function welcome () {
    let title = chalkanimation.rainbow("\t\t\t\tWelcome to GuessMaster!")
    await new Promise((resolve) => {
        setTimeout(resolve,3000);
    });
    title.stop();
}

await welcome()


const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.cyan("Please guess a number between 1-6: "),
    },
]);

if(answers.userGuessedNumber === randomNumber){
console.log (chalk.green("Congratulations! you guessed right number."));
}else {
console.log (chalk.red("You guessed wrong number"));
}


