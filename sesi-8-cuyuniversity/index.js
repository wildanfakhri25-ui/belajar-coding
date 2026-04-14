let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const data = lowercase + uppercase + numbers + symbols;
    let generator = "";
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

const getPassword =() => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword
}
const savePassword = () => {
    document.title = password.value;
    saveButton.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(password.value)}`);
    saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
}