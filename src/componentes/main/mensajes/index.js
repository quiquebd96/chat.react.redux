import React from 'react';
import './style.css'

import finn from '../../img/finn.png';
import jake from '../../img/jake.jpg';

const Mensajes = (props) => {
    return (
        <div>

            

                <div className="flex-gridM ">
                    <div className="textAlingCenter">

                    {props.mensaje.user.id === 1  ? (
                        <img src={finn}  alt="Hola" className="imagenMensajeUsuario" />
                    ) : (
                        <img src={jake} alt="Hola" className="imagenMensajeUsuario" />
                    )}

                        
                    </div>
                    <div className="mensajeDes">

                        <div className="flex-gridM-column">
                            <div>
                                <span className="usuarioMensajeText"> {props.mensaje.user.name} </span> 
                                <span className="fechaMensajeText"> 5 Nov - 1:37pm </span>
                            </div>
                            <div className="mensajeDescripcion mensajeDescripcionText">
                                {props.mensaje.message}
                            </div>
                        </div>


                    </div>
                



            </div>


        </div>
    )
}

export default Mensajes;