const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const functions = [getRandomUpper,getRandomLower,getRandomNumber,getRandomSymbol];

function generatePassword() {
    let generatedPassword = '';
    for(let i = 0 ; i < lengthElement.value ; i++) {
        generatedPassword += functions[Math.floor(Math.random() * functions.length)]();
    }
    return generatedPassword;
};

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
} 

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

generateElement.addEventListener('click', () => {
    resultElement.innerHTML = '';
    resultElement.innerHTML = generatePassword();
});

clipboardElement.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultElement.innerText;
    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to Clipboard');
});