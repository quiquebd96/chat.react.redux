import React, { Component } from 'react';
import { connect } from 'react-redux';

import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';


import Mensajes from './mensajes';
import Enviar from './enviar';
import './style.css'
import {cargaMensajes} from '../../redux/actions/mensajes/carga.mensajes';




const override = css`
    display: block;
    margin: 0 auto;
    border-color: #1de9b6;
    
`;

class Main extends Component{

    componentDidMount() {
        this.props.cargaMensajes();
    }

    render() {

        if(this.props.dataMensajes.loading){
            return (
                <div>
                    <div className='sweet-loading l'>
                        <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#1de9b6'}
                        loading={true}
                        />
                    </div> 
                </div>
            )

        }else if(this.props.dataMensajes.error){
            return (
                <div>
                    { this.props.dataMensajes.error }
                </div>
            )
        }

        return (
            <div className="Main">
                
                <div className="contentMain">

                    

                    <div className="contentMensajes">
                        { this.props.dataMensajes.mensajes.map((mensaje,index) => <Mensajes key={index} mensaje={mensaje}/>) }            
                    </div>
                    
                    <Enviar />

                </div>

            </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        dataMensajes: state.dataMensajes
    }
}


export default connect(mapStateToProps,{ cargaMensajes })(Main);