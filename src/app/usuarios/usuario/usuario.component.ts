import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuarioActions from 'src/app/store/actions';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {

  public subscription : Subscription = new Subscription();
  public subscriptionStore : Subscription = new Subscription();
  public usuario : Usuario;
  public loading : boolean;
  public error : any;

  constructor(private router : ActivatedRoute
             ,private store : Store<AppState>
      ) { }

  ngOnInit() {
    this.subscription = this.router.params.subscribe(
      params => {
        const id = params['id'];
        this.store.dispatch(new usuarioActions.CargarUsuario(id));
        this.subscriptionStore = this.store.select('usuario').subscribe(
          usuario => {
            this.usuario = usuario.user;
            this.loading = usuario.loading;
            this.error = usuario.error;
          }
        )
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscriptionStore.unsubscribe();
  }

}
