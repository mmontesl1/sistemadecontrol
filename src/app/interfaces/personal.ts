import { EmailValidator } from "@angular/forms";

export interface Personal {
  id?: number;
  documento: string;
  primernombre: string;
  primerapellido: string;
  telefono: string;
  sexo: string;
  correo: string;
  foto: string;
}
