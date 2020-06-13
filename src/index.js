import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './componentes/Card/Card';
import Saludo from './componentes/Saludo/Saludo'


// El contenedor es un elemento obtenido de nuestro html
const contenedor = document.getElementById("root")

//ReactDom recibe dos parametros uno es elemento a renderizar y el otro es el contenedor donde se renderizara
ReactDOM.render(
            <div>
                <Saludo 
                    user_name="Brayan Acosta"
                />
                <Card 
                    title="Guias Tecnicas"
                    description="Aprende lo basico de ejercicios de calentamiento muscular."
                    img="images/exercise.png"
                    leftColor=""
                    rightColor=""
                />
            </div>
                , contenedor)




