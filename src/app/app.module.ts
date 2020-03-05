import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,   
    NuevoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,NuevoComponenteComponent],
  
})
export class AppModule { }
