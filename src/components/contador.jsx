import React,{useState} from 'react'
import '../assets/css/style.css'
import logosergio from '../assets/img/logosergio.png'
const Contador = () => {

    const [cont,setCont]=useState(0)
    const aumentar=()=>{
        setCont(cont+1)
    }    
    const decrementar=()=>{
        setCont(cont-1)
    }
    return (
        <div className="contenedor">
            <h1>Contador Sergio Arboleda</h1>
                <img src={logosergio} alt="logosergio"/>
                <p>{cont}</p>
               <button onClick={aumentar} 
               className="boton aum">
                +
                </button>
                <button onClick={decrementar} 
                className="boton dism">
                -
                </button>

        </div>
    )
}

export default Contador
