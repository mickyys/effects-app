import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuarios from '../actions';

export interface UsuarioState {
    user : Usuario;
    loaded : boolean;
    loading : boolean;
    error : any;
}

const estadoInicial : UsuarioState = {
    user : null,
    loaded : false,
    loading : false,
    error : null
}

export function usuarioReducers(state = estadoInicial, action : fromUsuarios.usuarioAcciones) : UsuarioState {
    switch(action.type){
        case  fromUsuarios.CARGAR_USUARIO :
            return {
                ...state,
                loading : true,
                error : null
            }
        case  fromUsuarios.CARGAR_USUARIO_SUCCESS : 
            return {
                ...state,
                loading : false,
                loaded : true,
                user : action.usuario
            };
        case fromUsuarios.CARGAR_USUARIO_FAIL : 
            return {
                ...state,
                loaded : false,
                loading : false,
                error : {
                    status : action.payload.status,
                    message : action.payload.message,
                    url : action.payload.url
                }
            };        
        default :
            return state;
    }
}