window.addEventListener("load", function () {
const titulo = document.querySelector(".titulo")
const resposta = document.querySelector(".resposta")
const seta = document.querySelector(".seta")

titulo.addEventListener ("click", e => {
    if (resposta.style.display == "none") {
            resposta.style.display = "block"
            titulo.style.color = "black"
            seta.style.transform= "scaleY(-1)"
     } else {
            resposta.style.display = "none"
            titulo.style.color = "#787887"
            seta.style.transform= "scaleY(1)"
     }
})
});
