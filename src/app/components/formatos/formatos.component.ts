import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DocumentosService } from '../../services/documentos.service';
import { FileItem } from '../../models/file.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.css']
})
export class FormatosComponent implements OnInit {

  codigo:  string;
  formatos = null;
  archivo = new FileItem();

  constructor(private app: AppComponent, private documentosService: DocumentosService, private rutaActiva: ActivatedRoute) {
    app.pageSetting = {
      header: true,
      footer: true
    };
    this.codigo = localStorage.getItem('currentUser');
  }

  ngOnInit() {
    this.formatosrecuperar();
  }

  formatosrecuperar() {
    this.documentosService.documentoslistar(this.codigo).subscribe(result => this.formatos = result);
  }

  formatosborrar(cod: string, id: number, rut: string) {
    console.log(cod, id, rut);
    this.documentosService.borraFile(cod, id, rut);
  }


}
