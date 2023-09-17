import { Component } from '@angular/core';
import { Personal } from 'src/app/interfaces/personal';

@Component({
  selector: 'app-list-personal',
  templateUrl: './list-personal.component.html',
  styleUrls: ['./list-personal.component.css']
})
export class ListPersonalComponent {
  listPersonal: Personal[] = [
    {id:1, documento: '1234556' , primernombre: 'Mateo' , primerapellido: 'Montes' , telefono: '3225272929' , sexo: 'Masculico' , correo: ' mateomontes@gmail.es', foto: "url"},
    {id:2, documento: '1234557' , primernombre: 'Marta' , primerapellido: 'Montes' , telefono: '3225272928' , sexo: 'Femenino' , correo: ' martamontes@gmail.es', foto: "url"},
  ]
}
