let conteggioMare = 0
let conteggioMontagna = 0
let elemento = document.getElementById("risultato")

let risposta = prompt("Ti piace il caldo o il freddo?")
if (risposta == "caldo") {
    conteggioMare = conteggioMare + 1
} else {
    conteggioMontagna = conteggioMontagna + 1
}

risposta = prompt("Ti piacciono le castagne")
if (risposta == "si") {
    conteggioMontagna = conteggioMontagna + 1
} else {
    conteggioMare = conteggioMare + 1
}

risposta = prompt("Ti piace la neve?")
if (risposta == "si") {
    conteggioMontagna = conteggioMontagna + 1
} else {
    conteggioMare = conteggioMare + 1
}

if( conteggioMare > conteggioMontagna){
    elemento.innerText = "Sei un tipo da mare"
}else{
    elemento.innerText = "Sei un tipo da montagna"
}
console.log(conteggioMare, conteggioMontagna)
