import React, { Component } from 'react';
import Card from '../componentes/Card/Card';
import Saludo from '../componentes/Saludo/Saludo';

export default class Ejercicios extends Component {
    render() {
        return (
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
        )
    }
}
