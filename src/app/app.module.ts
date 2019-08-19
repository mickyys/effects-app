//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

//environment
import { environment } from 'src/environments/environment';

//Modulos APP
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

//rutas
import { AppRoutingModule } from './app-routing.module';

//store redux
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { EffectsModule } from '@ngrx/effects'

import { appReducers } from './store/app.reducer';
import { effectsArr } from './store/effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effectsArr),
    SharedModule,
    UsuariosModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
