let passOneEl = document.getElementById("password-one")
let passTwoEl = document.getElementById("password-two")
let generateBtnEl = document.getElementById("generate-btn")
let lengthInputEl = document.getElementById("length-input")
let symbolsCheckboxEl = document.getElementById("symbols-check")
let numbersCheckboxEl = document.getElementById("numbers-check")

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

function getRandomChar(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function generatePassword(len) {
    let password = ""
    let isSymbols = symbolsCheckboxEl.checked;
    let isNumbers = numbersCheckboxEl.checked;

    if(len<8 || len>25){
        alert("Password length should be above 8 and below 25.")
        return
    } 
    let characters = ""

    if (isSymbols && isNumbers) {
        characters = alphabets.concat(symbols.concat(numbers))
    } else if (isSymbols) {
        characters = alphabets.concat(symbols)
    } else if (isNumbers) {
        characters = alphabets.concat(numbers)
    } else {
        characters = alphabets
    }
    for(let i=0; i<len; i++){
            password += getRandomChar(characters)
    }
    return password
}

function renderPassword() {
    const length = parseInt(lengthInputEl.value)
    passOneEl.textContent = generatePassword(length)
    passTwoEl.textContent = generatePassword(length)
}

generateBtnEl.addEventListener("click", renderPassword)

lengthInputEl.addEventListener("keydown", function() {
    if (event.key==='Enter'){
        renderPassword()
    }
})

function copyToClipboard(element) {
    const passwordText = element.textContent;
    
    if (passwordText === "" || passwordText === "undefined") return;

    navigator.clipboard.writeText(passwordText)
    alert("Password copied to clipboard!")
}

passOneEl.addEventListener("click", function() {
    copyToClipboard("passOneEl");
});

passTwoEl.addEventListener("click", function() {
    copyToClipboard(passTwoEl);
});
