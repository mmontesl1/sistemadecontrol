import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personal } from 'src/app/interfaces/personal';

@Component({
  selector: 'app-add-edit-personal',
  templateUrl: './add-edit-personal.component.html',
  styleUrls: ['./add-edit-personal.component.css']
})
export class AddEditPersonalComponent {

  formPersonal: FormGroup;

  //clase inyectada en inyeccion de dependencia
  constructor(private fb: FormBuilder){
    this.formPersonal = this.fb.group({
      document: ['', Validators.required],
      firstName: ['', Validators.required],
      firstLastName: ['', Validators.required],
      phone: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', Validators.email],
      photo: ['', Validators.required],

    })
  }
  addPersonal(){
    // console.log(this.formPersonal.value.document);

    const personal: Personal = {
      documento: this.formPersonal.value.document,
      primernombre: this.formPersonal.value.firstName,
      primerapellido: this.formPersonal.value.firstLastName,
      telefono: this.formPersonal.value.phone,
      sexo: this.formPersonal.value.genero,
      correo: this.formPersonal.value.email,
      foto: this.formPersonal.value.photo,
      }
      console.log(personal);
  }
}
