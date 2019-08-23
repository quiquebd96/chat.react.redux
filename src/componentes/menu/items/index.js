import React from 'react';
import './style.css'

import jake from '../../img/jake.jpg';
import finn from '../../img/finn.png';

const ItemMenu = (props) => {
    return (
        <div>
            
            {props.persona.id === 0  ? (
                <li><span>{ props.persona.name}</span></li>
            ) : (
                
                <li>
                        
                    <div className="contenItema">
                        

                        { props.persona.status === 1 ? (
                            <i className="material-icons textVerde marginRight-5 sizeIcon" >fiber_manual_record </i>
                        ) : (  props.persona.status === 2 
                            ? <i className="material-icons marginRight-5 sizeIcon" >brightness_2 </i>
                            : <i className="material-icons marginRight-5 sizeIcon" >panorama_fish_eye </i>
                        )}


                        { props.persona.id === 1 ? ( 
                            <img  src={finn} alt="Hola" className="imagenUsuarioMenu marginRight-5" /> 
                        ) : ( props.persona.id === 2 
                            ? <img  src={jake} alt="Hola" className="imagenUsuarioMenu marginRight-5" />
                            : <span className="marginRight-20 spanNumero" >#   </span>
                        )}
                        
                        {props.persona.name}
                    </div>
                
                </li>

            )}

            

               
            
        </div>
    )
}

export default ItemMenu;