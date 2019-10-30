import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NgForm } from '@angular/forms';
import { DatosModel } from 'src/app/models/datos.model';
import { DatosService } from '../../services/datos.service';
import { FinalistasService } from '../../services/finalista.service';

@Component({
  selector:  'app-datos',
  templateUrl:  './datos.component.html',
  styles: [`.ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
    }
  `]
})
export class DatosComponent {

  codigo:  string;
  formulario = new DatosModel();

  constructor(private app:  AppComponent,
              private datosService: DatosService, private finalista: FinalistasService) {
    app.pageSetting = {
      header:  true,
      footer:  true
    };
    this.codigo = localStorage.getItem('currentUser');
    this.finalista.finalistaseleccionar(this.codigo).subscribe(result => this.formulario = result[0]);

  }

  guardar(forma: NgForm) {
    this.formulario.codigo = this.codigo;
    console.log('Formulario posteado');
    console.log('ngForm', forma);
    console.log('valor', forma.value);
    console.log('Formulario', this.formulario);
    this.datosService.datosactualizar(this.formulario).subscribe(datos => {
      if (datos['resultado'] === 'OK') {
        alert(datos['mensaje']);
      }
    });
  }

}
