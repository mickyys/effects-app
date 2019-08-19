import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuariosActions from '../actions'
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$ : Actions,
        private usuarioService : UsuarioService
    ){}

    @Effect()
    cargarUsuarios$ = this.actions$
        .pipe( 
          ofType(usuariosActions.CARGAR_USUARIOS),     
          mergeMap(() => { 
              return this.usuarioService.getUsers()
                .pipe(
                    map(users => {
                        console.log(users);
                        return new usuariosActions.CargarUsuariosSuccess(users)
                    }),
                    catchError( err => {
                        return of(new usuariosActions.CargarUsuariosFail(err));
                    })
                );
          })                        
        );

}