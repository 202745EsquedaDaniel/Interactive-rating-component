const rate = document.querySelector("#btnfeed");
const rate2 = document.querySelector("#btnfeed2");
const rate3 = document.querySelector("#btnfeed3");
const rate4 = document.querySelector("#btnfeed4");
const rate5 = document.querySelector("#btnfeed5");
const btnsubmit = document.querySelector("#submitbtn");
const Pestaña_gracias = document.querySelector("#Pestaña_gracias");
const selectednuevo = document.querySelector("#selected");
let selected = 0;

rate.addEventListener("click", togglebtnfeed);
rate2.addEventListener("click", togglebtnfeed2);
rate3.addEventListener("click", togglebtnfeed3);
rate4.addEventListener("click", togglebtnfeed4);
rate5.addEventListener("click", togglebtnfeed5);
btnsubmit.addEventListener("click", removeHidden);

function togglebtnfeed() {
  rate.classList.toggle("btnactive");
  console.log("hola");
  rate2.classList.remove("btnactive");
  rate3.classList.remove("btnactive");
  rate4.classList.remove("btnactive");
  rate5.classList.remove("btnactive");
  selected = 1;
  updateSelected();
}

function togglebtnfeed2() {
  rate2.classList.toggle("btnactive");
  console.log("hola");
  rate.classList.remove("btnactive");
  rate3.classList.remove("btnactive");
  rate4.classList.remove("btnactive");
  rate5.classList.remove("btnactive");
  selected = 2;
  updateSelected();
}

function togglebtnfeed3() {
  rate3.classList.toggle("btnactive");
  console.log("hola");
  rate.classList.remove("btnactive");
  rate2.classList.remove("btnactive");
  rate4.classList.remove("btnactive");
  rate5.classList.remove("btnactive");
  selected = 3;
  updateSelected();
}

function togglebtnfeed4() {
  rate4.classList.toggle("btnactive");
  console.log("hola");
  rate.classList.remove("btnactive");
  rate2.classList.remove("btnactive");
  rate3.classList.remove("btnactive");
  rate5.classList.remove("btnactive");
  selected = 4;
  updateSelected();
}

function togglebtnfeed5() {
  rate5.classList.toggle("btnactive");
  
  rate.classList.remove("btnactive");
  rate2.classList.remove("btnactive");
  rate3.classList.remove("btnactive");
  rate4.classList.remove("btnactive");
  selected = 5;
  console.log(selected);
  updateSelected();
}

function removeHidden() {
  Pestaña_gracias.classList.remove("ocultar");
}

function updateSelected() {
  selectednuevo.innerHTML = "you selected "+ selected + " out of 5";
  btnsubmit.disabled = false;
  
}
if (selected == 0) {
  
  btnsubmit.disabled = true;
  alertade0();
}

function alertade0() {
  alert("el valor no puede ser 0")
}