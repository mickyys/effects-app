import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as usuariosActions from '../actions'
import { UsuarioService } from 'src/app/services/usuario.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$ : Actions,
        private usuarioService : UsuarioService
    ){}


    @Effect()
    cargarUsuario$ = this.actions$
        .pipe( 
          ofType(usuariosActions.CARGAR_USUARIO),     
          mergeMap(action => { 
              
              console.log(action);
              const id = action['id'];

              return this.usuarioService.getUsersById(id)
                .pipe(
                    map(user => {
                        console.log(user);
                        return new usuariosActions.CargarUsuarioSuccess(user)
                    }),
                    catchError( err => {
                        return of(new usuariosActions.CargarUsuarioFail(err));
                    })
                );
          })                        
        );
    
}