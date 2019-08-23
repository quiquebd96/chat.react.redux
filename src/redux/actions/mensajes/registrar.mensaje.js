import CONSTANTES from '../../../config/constantes';

export function registroMensaje(mensaje){
    return async (dispatch) => {
        try{

            dispatch({
                type: CONSTANTES.GUARDAR_MENSAJE,
                mensaje: mensaje
            });

        }catch(e){

            dispatch({
                type: CONSTANTES.ERROR,
                error: 'Error al registrar el mensaje.'
            });

        }

    }

}