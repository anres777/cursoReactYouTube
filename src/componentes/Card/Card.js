
import React from 'react'

//Nota: Si deseamos importar estilos CSS debe ir './' si el archivo esta en la misma carpeta
//que el componente
import './Card.css'



class Card extends React.Component {
    constructor(props) {
        super(props)
        //Siempre se debe de llamar al constructor padre super para utilizar props
    }
    render() {
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.props.urlImagen} className="float-right "/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Guias Tecnicas</h1>
                            <p>Aprende lo basico de ejercicios de calentamiento muscular.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}



export default Card
