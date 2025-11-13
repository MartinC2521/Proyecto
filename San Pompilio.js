const modal = document.getElementById("modalTrivia");
const abrir = document.getElementById("abrirTrivia");
const cerrar = document.querySelector(".cerrar");
abrir.onclick = () => { modal.style.display = "block"; };
cerrar.onclick = () => { modal.style.display = "none"; };
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
document.getElementById("contenidoTrivia").addEventListener("submit", function(e) {
    e.preventDefault();
    let puntaje = 0;
    let salida = "";
    let r1 = document.querySelector('input[name="p1"]:checked');
            if (r1) {
                if (r1.value === "Montecalvo") {
                    puntaje++;
                    salida += "<p class='correcta'>1.Correcta</p>";
                } else {
                    salida += "<p class='incorrecta'>1.Incorrecta. Correcta: Montecalvo</p>";
                }
            } else {
                salida += "<p class='incorrecta'>1.No respondida. Correcta: Montecalvo</p>";
            }
    let r2 = document.querySelector('input[name="p2"]:checked');
            if (r2) {
                if (r2.value === "1934") {
                    puntaje++;
                    salida += "<p class='correcta'>2.Correcta</p>";
                } else {
                    salida += "<p class='incorrecta'>2.Incorrecta. Correcta: 1934</p>";
                }
            } else {
                salida += "<p class='incorrecta'>2.No respondida. Correcta: 1934</p>";
            }
    let r3 = document.querySelector('input[name="p3"]:checked');
            if (r3) {
                if (r3.value === "Domenico Michele Giovan Battista Pirrotti") {
                    puntaje++;
                    salida += "<p class='correcta'>3.Correcta</p>";
                } else {
                    salida += "<p class='incorrecta'>3.Incorrecta. Correcta: Domenico Michele Giovan Battista Pirrotti</p>";
                }
            } else {
                salida += "<p class='incorrecta'>3.No respondida. Correcta: Domenico Michele Giovan Battista Pirrotti</p>";
            }
    let r4 = document.querySelector('input[name="p4"]:checked');
            if (r4) {
                if (r4.value === "Campi Salentina") {
                    puntaje++;
                    salida += "<p class='correcta'>4.Correcta</p>";
                } else {
                    salida += "<p class='incorrecta'>4.Incorrecta. Correcta: Campi Salentina</p>";
                }
            } else {
                salida += "<p class='incorrecta'>4.No respondida. Correcta: Campi Salentina</p>";
            }
    let r5 = document.querySelector('input[name="p5"]:checked');
            if (r5) {
                if (r5.value === "18") {
                    puntaje++;
                    salida += "<p class='correcta'>5.Correcta</p>";
                } else {
                    salida += "<p class='incorrecta'>5.Incorrecta. Correcta: 18</p>";
                }
            } else {
                salida += "<p class='incorrecta'>5.No respondida. Correcta: 18</p>";
            }   
    salida += `<h4>Puntaje final: ${puntaje} de 5</h4>`;
        if (puntaje === 5) salida += "¡Excelente!";
        else if (puntaje >= 3) salida += "Muy bien.";
        else salida += "Puedes mejorar.";
    document.getElementById("resultado").innerHTML = salida;
});