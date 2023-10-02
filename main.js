const changeColorButtonRed = document.getElementById('changeColorButtonRed');
changeColorButtonRed.addEventListener('click', changeBackgroundColorRed);

function changeBackgroundColorRed() {
    document.body.style.backgroundColor = 'red';
}

const changeColorButtonGreen = document.getElementById('changeColorButtonGreen');
changeColorButtonGreen.addEventListener('click', changeBackgroundColorGreen);

function changeBackgroundColorGreen() {
    document.body.style.backgroundColor = 'green';
}
const changeColorButtonBlue = document.getElementById('changeColorButtonBlue');
changeColorButtonBlue.addEventListener('click', changeBackgroundColorBlue);

function changeBackgroundColorBlue() {
    document.body.style.backgroundColor = 'blue';
}