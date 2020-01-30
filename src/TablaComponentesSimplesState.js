import React from 'react';


const TablaCabecera = () =>{
    return (
        <thead> 
            <tr> 
                <th>Nombre</th>
                <th>Borrar</th>
            </tr> 
        </thead> 
    )
}

const TablaCuerpo = props => {
    const filasDeDatos=props.datosPersonajes.map((fila, indice)=>{
        return (
            <tr key={indice}>
                 <td>{fila.nombre}</td>
                <td><button onClick={()=>props.borrarPersonaje(indice)}>Borrar</button></td>
            </tr>
        )
    })
    return(
        <tbody>
            {filasDeDatos}
        </tbody>
    )
}


const TablaComponentesSimplesState=(props)=>{
    const {datosPersonajes,borrarPersonaje}=props;
    return(
        <table>
            <TablaCabecera />
            <TablaCuerpo datosPersonajes={datosPersonajes} borrarPersonaje={borrarPersonaje}/>
        </table>
    )
}
export default TablaComponentesSimplesState


