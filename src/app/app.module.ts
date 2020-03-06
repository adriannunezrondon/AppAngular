import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,   
    NuevoComponenteComponent, UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,NuevoComponenteComponent],
  
})
export class AppModule { }
