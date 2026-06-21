function mostrarMensaje() {
  const mensajes = [
    "Papá, eres mi héroe 💪",
    "Gracias por tu apoyo incondicional ❤️",
    "Aunque estemos lejos, siempre estás conmigo 🌍",
    "Te quiero mucho, feliz día 🎉",
    "Eres el mejor papá del mundo 🌟",
    "Gracias por enseñarme a ser fuerte y valiente 🦸‍♂️",
    "Eres mi inspiración diaria 🌈",
  ];
  const aleatorio = Math.floor(Math.random() * mensajes.length);
  const mensaje = document.getElementById("mensaje");
  mensaje.innerText = mensajes[aleatorio];

  // Animación de aparición
  mensaje.style.opacity = 0;
  setTimeout(() => {
    mensaje.style.opacity = 1;
  }, 100);
}
