import React, {
    Component
} from 'react'
import TablaComponentesSimples from './TablaComponentesSimples'
import Tabla from './Tabla';
class App extends Component {
    render() {
        return ( <div className = "App" >
                 <h2> Tabla sin componentes simples </h2> 
                     <Tabla />
                 <h2> Tabla con componentes simples </h2> 
                    <TablaComponentesSimples /
             ></div> )
    }
}
export default App;



