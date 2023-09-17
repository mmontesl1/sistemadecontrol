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

  constructor(private fb: FormBuilder){
    this.formPersonal = this.fb.group({
      documento: ['', Validators.required],
      correo: ['', Validators.email],
    })
  }
  addPersonal(){
    // const personal: Personal = {
    //   Documento:
    // }
  }
}
