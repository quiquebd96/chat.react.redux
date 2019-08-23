import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registroMensaje } from '../../../redux/actions/mensajes/registrar.mensaje';
import './style.css'

import finn from '../../img/finn.png'

class Enviar extends Component{

    state={
        mensaje: ""
    }

    handleChange = ($event) => {
        this.setState({
            mensaje: $event.target.value
        })
    }

    registrar = ($event) => {

        if ($event.charCode === 13) {

            let mensajeRegistro = {
                user: {
                  name: "Bender",
                  username: "bender",
                  id: 1
                },
                receiver_id: 2,
                message: $event.target.value
            }

            this.props.registroMensaje(mensajeRegistro);
            this.setState({
                mensaje: ""
            })

        }
       
    }

    render() {

        return (
            <div className="">

                <footer>

                <div className="barraEnviar">
                        
                        <div className="imagenEnviarDiv" >
                                <img  src={finn} alt="Hola" className="imagenEnviar" />
                        </div>
                        <div className="flex6" >
                            <input type="text"  className="inputEnviar"  placeholder="Escribe un mensaje"
                                name="mensaje" value={this.state.mensaje} 
                                onChange={this.handleChange} 
                                onKeyPress={this.registrar}
                            />
                        </div>
                        <div className="flex1 divIconosEnviar" >

                                <i className="material-icons textIcon"> attach_file </i>
                                <i className="material-icons textIcon">insert_emoticon </i>
                                <i className="material-icons textIcon">send</i>

                        </div>


                </div>

                    


                </footer>
               
                

            </div>
        )
    }
}



export default connect(null,{ registroMensaje })(Enviar);