import React, { Component } from 'react';
import './style.css'
import finnImage from '../img/finn.png';

class Header extends Component{

    render() {
        return (

            <div className="Header">
                <header >
                    
                    <div className="flex-grid">

                        <div className="divBotones">
                            <div className="contentDiv paddingTop4 contentBotons" >
                                <button className="boton">Lorem</button>
                                <button className="boton active">Ipsum</button>
                                <button className="boton">Dolor</button>
                            </div> 
                        </div>

                        <div className="flex3">
                            <div className="contentDiv text font14">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            </div>
                        </div>

                        <div className="divIcons">

                            <div className="contentIcon marginRight-5">
                                <i className="material-icons" >credit_card </i>
                            </div>

                            <div className="contentIcon marginRight-5">
                                <i className="material-icons" >credit_card </i>
                            </div>

                            <div className="contentIcon marginRight-5">
                                <i className="material-icons" >credit_card </i>
                            </div>

                            <img  src={finnImage} alt="Hola" className="imagenUsuario marginRight-5" />

                        </div>

                    </div>

                </header>
            </div>

        )
    }
}

export default Header;