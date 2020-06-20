import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App/App';


// El contenedor es un elemento obtenido de nuestro html
const contenedor = document.getElementById("root")

//ReactDom recibe dos parametros uno es elemento a renderizar y el otro es el contenedor donde se renderizara
ReactDOM.render( <App /> , contenedor)




