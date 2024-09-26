// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "💛Fue mas difici de lo que parecia a un principio",time: 49 },
  { text: "No quise quererla pero acostumbré a mis manos a tenerla cada noche", time: 57 },
  { text: "Fue más feroz el amor de cuatro días que el de años..", time: 65},
  { text: "Fue tan veloz y se suponía que esto acabaría sin hacernos daño", time:74 },
  { text: "Pero tú..", time: 81 },
  { text: "Te agarras a mis notas", time: 83},
  { text: "Te agarras a esta melodia loca que brota de mi boca", time: 89},
  { text: "pero tu..", time: 98},
  { text: "Te cuelgas de mi espalda", time: 102},
  { text: "yo vuelvo por el filo de tu falda hasta tus pies...", time: 106},
  { text: "Fue tan extraño el despertar sin sus caricias...", time:130 },
  { text: "Jugamos a ser felices y se nos dio bien,Con mucho cariño perdon lo raro💛",time: 240},


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

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
setTimeout(ocultarTitulo, 216000);