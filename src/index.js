// const elemento =  document.createElement('h4')

// elemento.innerText="Hola mundo soy Brayan desde un H4"

// const contenedor = document.getElementById("root")

// contenedor.appendChild(elemento)

import React from 'react';
import ReactDOM from 'react-dom';

// El elemento contiene codigo JSX
let nombre = "Brayan Acosta"
const elemento = <h1>Hola mundo {nombre}</h1>

// El contenedor es un elemento obtenido de nuestro html
const contenedor = document.getElementById("root")

//ReactDom recibe dos parametros uno es elemento a renderizar y el otro es el contenedor donde se renderizara
ReactDOM.render(elemento, contenedor)


