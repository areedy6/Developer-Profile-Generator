function initProgram() {
    const axios = require("axios");
    const inquirer = require("inquirer");
    const fs = require('fs');
    const pdf = require('html-pdf');


    let username;
    let userCompany;
    let userRealName;
    let profileImageURL;
    let userLocation;
    let userGitHubProfile;
    let userBlog;
    let userBio;
    let numberOfPublicRepos;
    let numberOfFollowers
    let numberOfGitHubStars;
    let numberOfUsersFollowing;
    let userFavColor;

    
    inquirer.prompt([{
        message: "Enter your GitHub username",
        name: "usernameProvided"
    },
    {
        message: "What is your favorite color?",
        name: "favoriteColor"
    }])


    .then(function ({ usernameProvided, favoriteColor }) {
        username = usernameProvided;
        userFavColor = favoriteColor;
        const queryUrl = `https://api.github.com/users/${username}`;
        goLookOne(queryUrl);
    });


    function goLookOne(URL) {

        axios.get(URL)
            .then(function (response) {

                profileImageURL = response.data.avatar_url;
                console.log(profileImageURL)
                userRealName = response.data.name;
                console.log(userRealName)
                userLocation = response.data.location;
                console.log(userLocation)
                userCompany = response.data.company;
                console.log(userCompany)
                userGitHubProfile = response.data.html_url;
                console.log(userGitHubProfile)
                userBlog = response.data.blog;
                console.log(userBlog)
                userBio = response.data.bio;
                console.log(userBio)
                numberOfPublicRepos = response.data.public_repos;
                console.log(numberOfPublicRepos)
                numberOfFollowers = response.data.followers;
                console.log(numberOfFollowers)
                numberOfUsersFollowing = response.data.following;
                console.log(numberOfUsersFollowing)
                makeHTMLFile(URL);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }
    function makeHTMLFile(URL){
        const resume =
 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
          <title>Document</title>
        </head>
        <body>
        
   
        

    <div class="top-card" style="background: ${userFavColor}"></div>
            <img src="${profileImageURL}" class="pic"></src>
            <h1 class="hi">Hi!</h1>
            <h1 class="my-name">My name is ${userRealName}</h1>
            <h2 class="currently-at">I'm currently @ ${userCompany}</h2>
            <h2 class="more-info">
                <span><a href="https://www.google.com/maps/place/${userLocation.split(" ")}">${userLocation}</a></span>
                <span><a href="${userGitHubProfile}">Github</a></span>
                <span><a href="${userBlog}">Blog</a></span>
            </h2>
            <p>${userBio}</p>
            <p>${numberOfPublicRepos}</p>
            <p>${numberOfGitHubStars}</p>
            <p>${numberOfFollowers}</p>
            <p>${numberOfUsersFollowing}</p>
        
            </body>
        </html>`;
         


    fs.writeFile(`./html/${username}.html`, resume, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

        makePDFFile();
    });
}

function makePDFFile() {
    const html = fs.readFileSync(`./html/${username}.html`, 'utf8');
    const options = {
        "height": "14in",
        "width": "12in",
    };

    pdf.create(html, options).toFile(`./pdf/${username}.pdf`, function (err, res) {
        if (err) return console.log(err);
        console.log(res);
    });
}
}
initProgram()