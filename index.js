let conteur = document.getElementById("conteur");
let increment = document.getElementById("increment");
let reset = document.getElementById("reset");
let decrement = document.getElementById("decrement");
let cont = 0;
increment.onclick = function () {
    cont++;
    conteur.textContent = cont;
};
decrement.onclick = function () {
    cont--;
    conteur.textContent = cont;
};
reset.onclick = function () {
    cont = 0;
    conteur.textContent = cont;
};
