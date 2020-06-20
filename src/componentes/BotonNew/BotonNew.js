import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import imgBoton from '../../images/add.png'
import './BotonNew.css'

export default class BotonNew extends Component {
    render() {
        return (
            //Link es como la etiqueta <a>
            <Link to="/Ejercicios/New">
                <img src={imgBoton} className="Fitness-Add" />
            </Link>
        )
    }
}
