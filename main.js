function maiorQue(){
    let numberA = parseInt(document.getElementById('numberA').value)
    let numberB = parseInt(document.getElementById('numberB').value)

    if (numberB > numberA) {
        document.getElementById("resultado").innerText = "O campo B é maior que o campo A." ;
    } else if (numberB >= numberA) {
        document.getElementById("resultado").innerText = "O campo B não é maior que o campo A.";
    } else {
        document.getElementById("resultado").innerText = "O campo B não é maior que o campo A.";
    }
}
