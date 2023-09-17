import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListPersonalComponent } from './components/list-personal/list-personal.component';
import { AddEditPersonalComponent } from './components/add-edit-personal/add-edit-personal.component';

const routes: Routes = [
  //ruta de personal
  {path: '', component: ListPersonalComponent},
  //ruta de add y de editar los cuales son el mismo componente
  {path: 'add', component: AddEditPersonalComponent},
  {path: 'edit/:id', component: AddEditPersonalComponent},
  //si se escribe una url que no exista redirecciona a personal
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
