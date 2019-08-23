import React, { Component } from 'react';
import './style.css'
import logo from './img/logo.png';

import Item from './items';

import favoritos from '../../data/favoritos';


class Menu extends Component{

    state={
        favoritos: favoritos,
        Recientes: [],
        Personas: []
    }


    render() {
        return (
            <div className="">
            
                <nav>
                    <div className="logo">
                        
                        <img src={logo} alt="Hola" className="imagenLogo" />
                        <span className="iconMenu"><i className="material-icons">menu</i></span>
                    </div>
                    <hr/>
                    <div className="logo flex">
                        
                        <span className="spanBoton">
                            <i className="material-icons textVerde marginRight-5" >fiber_manual_record </i>
                        </span>
                        <span className="spanBoton"> 
                            <i className="material-icons"> home</i>
                            <span>Trabajo Remoto</span>
                        </span>
                    </div>
                    <hr/>
                    <div className="logo">
                        <div className="divInputBuscar">

                            <input type="text" className="inputBuscar" placeholder="Buscar persona y canales" />
                            
                        </div>
                    </div>
                    <hr />
                    
                    <ul className="menu">
                        { this.state.favoritos.map((persona,index) => <Item key={index} persona={persona}/>) } 
                    </ul>
                               


                </nav>


            </div>
        )
    }
}

export default Menu;