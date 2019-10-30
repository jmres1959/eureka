import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DocumentosService } from '../../services/documentos.service';
import { FileItem } from '../../models/file.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-formato',
  templateUrl: './formato.component.html',
  styleUrls: ['./formato.component.css']
})
export class FormatoComponent implements OnInit {

  codigo: string;
  nombre: string;
  id: number;
  archivo = new FileItem();

  constructor(private app: AppComponent, private documentosService: DocumentosService, private rutaActiva: ActivatedRoute) { 
    app.pageSetting = {
      header: true,
      footer: true
    };
    this.codigo = localStorage.getItem('currentUser');
    this.nombre = this.rutaActiva.snapshot.params.nombre;
    this.id = this.rutaActiva.snapshot.params.id;
  }

  ngOnInit() {
  }

  seleccionarArchivo(event: any) {
    const files = event.target.files;
    const file = files[0];
    this.archivo.nombreArchivo = file.name;
    this.archivo.codigo = this.codigo;
    this.archivo.idDocumento = this.id;
    this.archivo.nombreDocumento = this.nombre;

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent: any) {
    const binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  upload() {
    console.log(this.archivo);
    this.documentosService.uploadFile(this.archivo).subscribe(
      datos => {
        if ( datos['resultado'] === 'OK') {
          alert(datos['mensaje']);
        }
      }
    );
  }

  borrar() {
    
  }
}
