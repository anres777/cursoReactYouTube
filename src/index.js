import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './componentes/Card/Card';

// El contenedor es un elemento obtenido de nuestro html
const contenedor = document.getElementById("root")

//ReactDom recibe dos parametros uno es elemento a renderizar y el otro es el contenedor donde se renderizara
ReactDOM.render(<Card urlImagen="images/exercise.png" />, contenedor)




