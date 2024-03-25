/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let palos = ["♦", "♥", "♠", "♣"];

  function elementRandom(elements) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
  }

  function updateCard() {
    // Generar números y palos por defecto al inicio
    document.getElementById("numero").innerHTML = elementRandom(numeros);
    let palo = document.getElementById("palo");
    let palo1 = document.getElementById("palo1");
    let paloAleatorio = elementRandom(palos);
    if (paloAleatorio === "♥" || paloAleatorio === "♦") {
      palo.style.color = "red";
      palo1.style.color = "red";
      palo1.style.transform = "rotate(180deg)";
    }
    palo.innerHTML = paloAleatorio;
    palo1.innerHTML = paloAleatorio;
  }

  //Llamar a la funcion updateCard cada 10 segundos
  setInterval(updateCard, 10000);

  //Event listener para el boton
  document.getElementById("button").addEventListener("click", () => {
    document.getElementById("numero").innerHTML = elementRandom(numeros);

    let palo = document.getElementById("palo");
    let palo1 = document.getElementById("palo1");
    let paloAleatorio = elementRandom(palos);
    if (paloAleatorio === "♥" || paloAleatorio === "♦") {
      palo.style.color = "red";
      palo1.style.color = "red";
      palo1.style.transform = "rotate(180deg)";
    }
    palo.innerHTML = paloAleatorio;
    palo1.innerHTML = paloAleatorio;

    //Obtener los valores de ancho y alto ingresados por el usuario
    let widthInput = document.getElementById("widthInput").value;
    let heightInput = document.getElementById("heightInput").value;

    //Aplicar los valores de ancho y alto a la tarjeta
    document.getElementById("card").style.width = widthInput + "rem";
    document.getElementById("card").style.height = heightInput + "rem";
  });
};
