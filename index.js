function initProgram() {
    const axios = require("axios");
    const inquirer = require("inquirer");
    const fs = require('fs');
    const pdf = require('html-pdf');


    

    
    inquirer.prompt([{
        message: "Enter your GitHub username",
        name: "usernameProvided"
    },
    {
        message: "What is your favorite color?",
        name: "favoriteColor"
    }])


    // .then(function ({ usernameProvided, favoriteColor }) {
    //     username = usernameProvided;
    //     userFavColor = favoriteColor;
    //     const queryUrl = `https://api.github.com/users/${username}`;
    //     goLookOne(queryUrl);
    // });

    // function makeHTML(answers){
    //     return `
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //       <meta charset="UTF-8">
    //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    //       <title>Document</title>
    //     </head>
    //     <body>
    //     <h1>My name is ${answers.name}</h1>
    //     <p>I'm from ${answers.location}</p>
    //     <p>I like ${answers.hobby}</p>
    //     <p>My favorite food is ${answers.food}</p>
    //     <p>Github: ${answers.github}</p>
    //     <p>LinkedIn: ${answers.linkedin}</p>
    //     </body>
        
        
    //     </html>`;
    //     }

    prompt()
}