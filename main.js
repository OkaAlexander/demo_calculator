
function inputNumber(number) {
    var screen = document.getElementById("screen");
    screen.value += number;
}

function checkEqual() {
    var screen = document.getElementById("screen");
    var results = eval(screen.value);
    screen.value = results;
}