import React,{useState} from 'react'


const Hello = () => {

    const [num,setNum]=useState(1)
    const [nombre,setNombre]=useState("carlos")
    const [grupo,setGrupo]=useState("G25")

    const cambiar=()=>{
            setNum(45)
            setNombre("jose")
            setGrupo("G17")
    }

    return (
        <div>

            <p>Hola desde React</p>
            <p>Numero:{num}</p>
            <p>Nombre:{nombre}</p>
            <p>Grupo:{grupo}</p>
            <button onClick={cambiar}>Cambiar</button>
        </div>
    )
}


export default Hello
