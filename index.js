let passOneEl = document.getElementById("password-one")
let passTwoEl = document.getElementById("password-two")
let generateBtnEl = document.getElementById("generate-btn")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLength = 15;

function getRandomChar(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword(len) {
    let password = ""
    for(i=0; i<len; i++){
        password += getRandomChar(characters)
    }
    return password
}

generateBtnEl.addEventListener("click", function() {
    passOneEl.textContent=generatePassword(passLength)
    passTwoEl.textContent=generatePassword(passLength)
})