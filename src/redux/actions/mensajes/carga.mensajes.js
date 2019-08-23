//import axios from 'axios';
import items from '../../../data/items';
import CONSTANTES from '../../../config/constantes';

export function cargaMensajes(){
    return async (dispatch) => {
        try {
            
            dispatch({
                type: CONSTANTES.CARGA_MENSAJES
            });
            
            /* Access-Control-Allow-Origin
            const response =  await axios.get('https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages');
            */
            
            setTimeout(function(){
                dispatch({
                    type: CONSTANTES.CARGA_MENSAJES_OK,
                    //mensajes: response.data
                    mensajes: items
                });
            }, 1000);

            

        }catch (e) {
            dispatch({
                type: CONSTANTES.ERROR,
                error: 'Error al cargar los datos.'
            });
        }
    }
    
}

