const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

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
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * (symbols.length - 1))];
}

function generatePassword(length, upFilter, lowFilter, nrFilter, syFilter) {
    if (length <= 4 || !upFilter && !lowFilter && !nrFilter && !syFilter) {
        return '';
    }

    let i = 0, password = '';
    while (password.length < length) {
        switch (i%4) {
            case 0:
                if (upFilter) {
                    password += getRandomUpper();
                }
                i++;
                break;
            case 1:
                if (lowFilter) {
                    password += getRandomLower();
                }
                i++;
                break;
            case 2:
                if (nrFilter) {
                    password += getRandomNumber();
                }
                i++;
                break;
            case 3:
                if (syFilter) {
                    password += getRandomSymbol();
                }
                i++;
                break;
        }
    }

    return password;
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;

    resultEl.innerText = generatePassword(length, hasUpper, hasLower, hasNumbers, hasSymbols);
})

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {return}

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');

})