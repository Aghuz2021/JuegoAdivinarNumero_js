let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados= [];
let numeroMaximo=10;

const asignarTextoElemento = (texto, selector) => {
    let elementoHtml = document.querySelector(selector);
    if (elementoHtml) {
        elementoHtml.innerHTML = texto;
    } else {
        console.error(`No se encontró ningún elemento con el selector: ${selector}`);
    }
};

const generarNumeroSecreto = () => {
    let numeroGenerado= Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    if(listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('Ya se sorteron todos los numeros posibles','p')
        
    }else{

        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
    
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
    
        }
    }
};


asignarTextoElemento('Juego del número secreto', 'h1');
asignarTextoElemento('Indica un número entre 1 y 10', 'p');

const verificarIntento = () => {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (isNaN(numeroUsuario)) {
        asignarTextoElemento('Por favor, ingresa un número válido', 'p');
        return;
    }

    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento(`¡Adivinaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`, 'p');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('El número secreto es menor', 'p');
        } else {
            asignarTextoElemento('El número secreto es mayor', 'p');
        }
        intentos++;
        limpiarInput();
        autoFocus();
    }
};

const limpiarInput = () => {
    let valorCaja = document.querySelector('#valorUsuario');
    if (valorCaja) {
        valorCaja.value = '';
        valorCaja.focus();
    } else {
        console.error('No se encontró ningún elemento con el id "valorUsuario"');
    }
};

const autoFocus = () => {
    let elemento = document.querySelector('#valorUsuario');
    if (elemento) {
        elemento.focus();
    } else {
        console.error('No se encontró ningún elemento con el id "valorUsuario"');
    }
};

const condicionesGenerales = () => {
    asignarTextoElemento('Juego del número secreto', 'h1');
    asignarTextoElemento(`Indica un número entre 1 al ${numeroMaximo}`, 'p');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
   
};

const reiniciarJuego = () => {
    limpiarInput();
    condicionesGenerales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
};

condicionesGenerales();
