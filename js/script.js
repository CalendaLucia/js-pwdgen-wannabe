const yourName = prompt("Please enter your name");
document.getElementById("name").innerHTML = "Hello " + yourName;

const yourSurname = prompt("...and your surname?")
document.getElementById("surname").innerHTML = "This is your last name: " + yourSurname;


const favoriteColor = prompt ("What's your favorite color")
document.getElementById("color").innerHTML = "This is your favorite color: " + favoriteColor;


const password = "21"
document.getElementById("password").innerHTML = "This is your password:"  + password;


document.getElementById("generator").innerHTML = "Recap:" + yourName * yourSurname + favoriteColor + password;

