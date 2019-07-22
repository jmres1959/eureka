import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  constructor(private app: AppComponent) {
    app.pageSetting = {
      header: true,
      footer: true
    };
  }

  ngOnInit() {
  }

}
