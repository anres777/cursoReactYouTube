
import React from 'react'

//Nota: Si deseamos importar estilos CSS debe ir './' si el archivo esta en la misma carpeta
//que el componente
import './Card.css'
import circlesImg from '../../images/circles.png'
import emptyImg from '../../images/empty.png'


class Card extends React.Component {
    constructor(props) {
        //Siempre se debe de llamar al constructor padre super para utilizar prop
        super(props);
        this.state = {
            image:'./../../images/exercise.png'
        };        
    }
    
    // componentDidMount(){
    //     setTimeout(
    //         ()=>{
    //             this.setState(
    //                 {
    //                     image: './../../images/add.png'
    //                 }
    //             )
    //         },
    //         5000
    //     );
    // }

    render() {
        //Esta lina crea varias constates con los valors pasados para evitar escribir "this.props" a cada rato
        const { title, description, img, leftColor, rightColor}  = this.props
        console.log(title)
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img}/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}


export default Card
