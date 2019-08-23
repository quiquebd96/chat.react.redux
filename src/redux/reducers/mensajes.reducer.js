import CONSTANTES from '../../config/constantes';

const initialState = {
    mensajes: [],
    loading: false,
    error: null
}


function mensajesReducer(state = initialState, action) {

    switch(action.type){
        case CONSTANTES.CARGA_MENSAJES:
            return { mensajes: [] , loading: true, error: null }

        case CONSTANTES.CARGA_MENSAJES_OK:
            return { mensajes: [...action.mensajes] , loading: false, error: null }
            
        case CONSTANTES.ERROR: 
            return { mensajes: [] , loading: false, error: action.error }

        case CONSTANTES.GUARDAR_MENSAJE:
           return { mensajes: state.mensajes.concat([action.mensaje]) }
            
        default:
            return state;
    }

}

export default mensajesReducer;
