// IMPORTACION DE LIBRERIAS
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


// IMPORTACION DE COMPONENTES
import Ejercicios from '../../paginas/Ejercicios'
import EjerciciosNew from '../../paginas/EjerciciosNew'
import NoFound from '../../componentes/NoFound/NoFound'



export default class App extends Component {
    render() {
        return (
            <Router>
                {/* 
                    exact : Es para evitar que el contenido de una ruta se combine con otro
                    path : Es la URL que hace referencia al componente
                    component: Es el componente que se renderizara, al llamarse el path anterior
                    El componente NoFound se renderizara si se ingresa Cuarquier direccion no especificada en las otras rutas. 
                */}
                <Route exact path="/Ejercicios" component={Ejercicios} />
                <Route exact path="/Ejercicios/New" component={EjerciciosNew} />
                <Route component={NoFound} />  
            </Router>
        )
    }
}
