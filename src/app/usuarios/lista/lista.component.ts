import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  public usuarios : Usuario[] = [];
  public loading : boolean;
  public error : any;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    
    this.store.dispatch(new usuariosActions.CargarUsuarios())

    this.store.select('usuarios').subscribe(
      usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      }
    )
  }

}
