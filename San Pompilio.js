const Preguntas = document.querySelectorAll('.Pregunta');
let Puntaje = 0;
let respuestasDadas = 0;
function manejarResultado(boton) {
    const contenedorPregunta = boton.closest('.Pregunta');
    if (contenedorPregunta.classList.contains('respondida')) {
        return;
    }
const esCorrecta = boton.getAttribute('data-correcta') === 'true';
if (esCorrecta) {
Puntaje++; 
const correctaReal = contenedorPregunta.querySelector('[data-correcta="true"]');
if (correctaReal) {
correctaReal.classList.add('correcta');
}
}
contenedorPregunta.classList.add('respondida');
respuestasDadas++;
}
function MostrarResultado() {
const totalPreguntas = Preguntas.length;
if (respuestasDadas < totalPreguntas) {
alert(`¡Atención! Solo has contestado ${respuestasDadas} de ${totalPreguntas} preguntas.`);
}else{
alert(`Tu puntaje final es: ${Puntaje} de ${totalPreguntas}`);
}
}
function comenzarTrivia() { 
    window.location.href = "./trivia.html";
}
function volverInicio() {
 window.location.href = "./index.html";
}