//import axios from 'axios';
import items from '../../data/items';

export function cargaMensajes(){
    return async (dispatch) => {
        try {
            
            dispatch({
                type: 'CARGA_MENSAJES'
            });
            
            /* Access-Control-Allow-Origin
            const response =  await axios.get('https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages');
            */
            
            setTimeout(function(){
                dispatch({
                    type: 'CARGA_MENSAJES_OK',
                    //mensajes: response.data
                    mensajes: items
                });
            }, 1000);

            

        }catch (e) {
            dispatch({
                type: 'ERROR',
                error: 'Error al cargar los datos.'
            });
        }
    }
    
}

