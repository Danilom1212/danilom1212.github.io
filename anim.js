// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Y si te parece", time: 14 },
  { text: "que yo estoy enamorado tuyo", time: 16 },
  { text: "eso es un invento, intuyo", time: 17 },
  { text: "no des crédito a murmullos", time: 20 },
  { text: "porque casi nunca llamo", time: 22 },
  { text: "para decir que te amo", time: 24 },
  { text: "y más de una vez lo hice", time: 26 },
  { text: "a un numero equivocado", time: 27 },
  { text: "casi nunca nadie dice", time: 29 },
  { text: "que yo estoy enamorado tuyo", time: 32 },
  { text: "raramente desespero", time: 38 },
  { text: "por tenerte aquí a mi lado", time: 40 },
  { text: "y eso no significa", time: 42 },
  { text: "que tenga un significado", time: 44 },
  { text: "si pensás que amor yo siento", time: 46 },
  { text: "por favor no hagas pamento", time: 48 },
  { text: "no comentes con tu gente", time: 50 },
  { text: "sobre nuestro asunto", time: 52 },
  { text: "casi nunca nadie dice", time: 54 },
  { text: "que yo estoy enamorado tuyo", time: 56 },
 
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find((line) => time >= line.time && time < line.time + 5);

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Mantén la opacidad en 1 una vez que la línea haya aparecido completamente
    if (opacity >= 1) {
      opacity = 1;
    }

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1500);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 342000);