// ITEM 1

let numero = prompt('Ingrese un número del 1 al 6');

if (numero == 1) {
    let numero1 =  prompt('Ingrese un numero del 1 al 100')
    for (let index = 0; index <= numero1; index++) {
        console.log(index);
    }
    }

    //ITEM 2

if (numero == 2) {
    let color =  prompt('¿De qué color es el caballo blanco de Napoleón?');
    while (color != 'blanco') {
    color = prompt('¿De qué color es el caballo blanco de Napoleón?');
    }
    }

    //ITEM 3

if (numero == 3) {
        let promMat = Number(prompt('Promedio de notas Matemáticas'));
        let promFis = Number(prompt('Promedio de notas Física'));
        let promCie = Number(prompt('Promedio de notas Ciencias'));

        const promedio = Math.round((promMat + promFis + promCie) / 3)
        alert(`Tu promedio de notas es: ${promedio}`)
    }


    //ITEM 4
if (numero == 4) {
    let frutaUno = prompt('Ingrese una fruta');
    let frutaDos = prompt('Ingrese una fruta');
    let frutaTres = prompt('Ingrese una fruta');

   let frutas = [frutaUno, frutaDos, frutaTres]

    for (let fruta of frutas) {
        if (fruta == 'manzana') {
            continue
        }
        console.log(fruta)
    }
}

//ITEM 5

if (numero == 5) {
    let nombre = prompt('Ingrese su nombre')

let vocales = nombre.match(/[aeiou]/gi)
let consonantes = nombre.match(/(?![aeiou])[a-z]/gi)

alert(`Tu nombre tiene ${vocales.length} vocales y ${consonantes.length} consonantes`)
}