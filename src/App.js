import React, {
    Component
} from 'react'
import TablaComponentesSimples from './TablaComponentesSimples'
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps'
import TablaComponentesSimplesState from './TablaComponentesSimplesState'
import Tabla from './Tabla';
class App extends Component {
    /*Objeto para utilizar en state */
    state = {
        personajes:[
            {
                nombre:"Payton Hobart"
            },
            {
                nombre:"Wendy Carr"
            },
            {
                nombre:"Mina"
            },
            {
                nombre:"Jonathan Harker"
            },
            {
                nombre:"Drácula"
            },
            {
                nombre:"Once"
            } ,
            {
                nombre:"Jim Hopper"
            } 

        ]
    }
    /*Método para borrar personajes */
    borrarPersonaje=indice=>{
        const {personajes} =this.state
        this.setState(
            {
                personajes:personajes.filter((personaje,i)=>{
                    return i !== indice; /* Devuelve los indices que no queremos borrar */
                })
            }
        )
    }
    render() {
        /*Coleccion de objetos con nomenclatura JSON para utilizar con PROPS */
        const actoresactrices=[
            {
                nombre:"Joel",
                apellidos:"Edger"
            },
            {
                nombre:"Carmen",
                apellidos:"Maura"
            },
            {
                nombre:"Luis",
                apellidos:"Tosar"
            },
            {
                nombre:"Chloe",
                apellidos:"Grace Moretz"
            }            
        ]

        /* Inicializamos el objeto de personajes */
        const {personajes}=this.state

        return ( <div className = "App" >
                 <h2> Tabla sin componentes simples </h2> 
                     <Tabla />
                 <h2> Tabla con componentes simples </h2> 
                    <TablaComponentesSimples />
                <h2>Tabla creada mediante componente de clase que utiliza paso de parámetros con PROPS</h2>    
                <TablaComponentesSimplesProps datosActoresActrices={actoresactrices}/>

                <h2>Tabla creada mediante componentes simples (con state y que permite eliminar)</h2>
                <TablaComponentesSimplesState datosPersonajes={personajes} borrarPersonaje={this.borrarPersonaje} />

                </div> )
    }
}
export default App;



