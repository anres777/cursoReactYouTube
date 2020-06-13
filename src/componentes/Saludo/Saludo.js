import React from 'react'
import './Saludo.css'


export default function Saludo(props) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h2> Hola {props.user_name} </h2>
                <p>
                    Vamos a trabajar y obtner valor.
                </p>
            </div>
        </div>
    )
}
