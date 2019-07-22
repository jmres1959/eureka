import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DocumentosService } from '../../services/documentos.service';


@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.css']
})
export class FormatosComponent implements OnInit {

  constructor(private app: AppComponent, _documentosService: DocumentosService) {
    app.pageSetting = {
      header: true,
      footer: true
    };
  }

  ngOnInit() {
  }

}
