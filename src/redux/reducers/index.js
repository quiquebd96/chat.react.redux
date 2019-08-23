import {combineReducers} from "redux";
import mensajesReducer from './mensajes.reducer';

export const rootReducer = combineReducers({
    dataMensajes: mensajesReducer
})
