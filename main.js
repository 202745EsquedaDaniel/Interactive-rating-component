const rate = document.querySelector("#btnfeed");
const rate2 = document.querySelector("#btnfeed2");
const rate3 = document.querySelector("#btnfeed3");
const rate4 = document.querySelector("#btnfeed4");
const rate5 = document.querySelector("#btnfeed5");

rate.addEventListener("click",togglebtnfeed)

function togglebtnfeed() {
    rate.classList.toggle("btnactive");
    console.log("hola")
    rate2.classList.remove("btnactive")
    rate3.classList.remove("btnactive")
    rate4.classList.remove("btnactive")
    rate5.classList.remove("btnactive")
}
rate2.addEventListener("click",togglebtnfeed2)

function togglebtnfeed2() {
    rate2.classList.toggle("btnactive");
    console.log("hola")
    rate.classList.remove("btnactive")
    rate3.classList.remove("btnactive")
    rate4.classList.remove("btnactive")
    rate5.classList.remove("btnactive")
}
rate3.addEventListener("click",togglebtnfeed3)

function togglebtnfeed3() {
    rate3.classList.toggle("btnactive");
    console.log("hola")
    rate.classList.remove("btnactive")
    rate2.classList.remove("btnactive")
    rate4.classList.remove("btnactive")
    rate5.classList.remove("btnactive")
}
rate4.addEventListener("click",togglebtnfeed4)

function togglebtnfeed4() {
    rate4.classList.toggle("btnactive");
    console.log("hola")
    rate.classList.remove("btnactive")
    rate2.classList.remove("btnactive")
    rate3.classList.remove("btnactive")
    rate5.classList.remove("btnactive")
}

rate5.addEventListener("click",togglebtnfeed5)

function togglebtnfeed5() {
    rate5.classList.toggle("btnactive");
    console.log("hola")
    rate.classList.remove("btnactive")
    rate2.classList.remove("btnactive")
    rate3.classList.remove("btnactive")
    rate4.classList.remove("btnactive")
}