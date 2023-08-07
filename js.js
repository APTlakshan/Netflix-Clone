const conOne = document.getElementById('conOne');
const conTwo = document.getElementById('conTwo');
const conThree = document.getElementById('conThree');

const cononediv = document.getElementById('cononediv');
const contwodiv = document.getElementById('contwodiv');
const conthreediv = document.getElementById('conthreediv');

const partone = document.querySelector(".part-1");
const parttwo = document.querySelector(".part-2");
const partthree = document.querySelector(".part-3");

conOne.addEventListener("click", function () {
    cononediv.classList.add('borderred');
    contwodiv.classList.remove('borderred');
    conthreediv.classList.remove('borderred');
    partone.classList.remove("disappire");
    parttwo.classList.add("disappire");
    partthree.classList.add("disappire");
});
conTwo.addEventListener("click", function () {

    cononediv.classList.remove('borderred');
    contwodiv.classList.add('borderred');
    conthreediv.classList.remove('borderred');
    partone.classList.add("disappire");
    parttwo.classList.remove("disappire");
    partthree.classList.add("disappire");
});
conThree.addEventListener("click", function () {

    cononediv.classList.remove('borderred');
    contwodiv.classList.remove('borderred');
    conthreediv.classList.add('borderred');
    partone.classList.add("disappire");
    parttwo.classList.add("disappire");
    partthree.classList.remove("disappire");
});





