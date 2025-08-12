document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("contenedor");
  const button = document.getElementById("saludoBtn");

  div.addEventListener("click", () => {
    alert("Hola! Soy el div");
  });

  button.addEventListener("click", () => {
    event.stopPropagation(); //Detiene el evento antes que llegue al div
    alert("Hola!");
  });
});
