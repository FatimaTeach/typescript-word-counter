#! /usr/bin/env node
//this line is called shebang, it tells the OS to run it with node js
import inquirer from "inquirer";

//declare a constant'answers' and assign it to the result of inquirer.prompt function

const answers: {
    sentence: string
} = await inquirer.prompt ([

    {
        name:"sentence",
        type:"input",
        message:"Enter the content to count words",

    }
])

const words = answers.sentence.trim().split(" ")

//print the array of words to the console

console.log(words)

//print the word count of the content to the console

console.log(`Your content word count is ${words.length}`)