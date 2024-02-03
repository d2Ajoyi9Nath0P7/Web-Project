const passwordBox = document.getElementById("Password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//26
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%&*?_+/.,";

const allChar = upperCase + lowerCase + number + symbol;

function createPassword()
{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];//b
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];//A
    password += number[Math.floor(Math.random() * number.length)];//3
    password += symbol[Math.floor(Math.random() * symbol.length)];//!

    while(length > password.length)//10 > 10
    {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}