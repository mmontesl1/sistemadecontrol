import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos
import {ReactiveFormsModule} from '@angular/forms';

//COMPONENTES
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPersonalComponent } from './components/list-personal/list-personal.component';
import { AddEditPersonalComponent } from './components/add-edit-personal/add-edit-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPersonalComponent,
    AddEditPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
