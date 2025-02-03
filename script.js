/**
 * Ano automatico
 * @author Nathan Freire Furukawa
 */



const main = document.querySelector('main')
const backgrounds = ['url(img/carrossel3.jpg)','url(img/carrossel4.jpg)','url(img/banner5.jpg)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    //troca da imagem de background no CSS
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)




// inserindo o ano na tag <span>
let ano = document.getElementById("copyrightYear")
// a linha abaixo obtem o ano atual do sistema
let anoAtual = new Date().getFullYear()
// a linha abaixo atribui o ano a tag <span> 
ano.innerHTML = anoAtual