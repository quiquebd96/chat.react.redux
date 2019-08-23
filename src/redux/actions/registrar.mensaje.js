export function registroMensaje(mensaje){
    return async (dispatch) => {
        try{

            dispatch({
                type: 'GUARDAR_MENSAJE',
                mensaje: mensaje
            });

        }catch(e){

            dispatch({
                type: 'ERROR',
                error: 'Error al registrar el mensaje.'
            });

        }

    }

}