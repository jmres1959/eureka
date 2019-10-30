import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FinalistasService } from '../../services/finalista.service';
import { DatosModel } from 'src/app/models/datos.model';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  codigo: string;
  datosFinalista = new DatosModel();

  constructor(private auth: AuthService, private app: AppComponent, private router: Router, private finalista: FinalistasService) {
    app.pageSetting = {
      header: false,
      footer: false
    };
  }

  ngOnInit() {
  }

  onLogin(cod: string) {
    if (cod !== '' && cod !== undefined) {
      this.finalista.finalistaseleccionar(cod).subscribe(result => {this.datosFinalista = result[0];
                                        console.log('SUBSCRIBE', cod, this.datosFinalista);
                                        if (this.datosFinalista.codigo !== null) {
                                          console.log(this.datosFinalista);
                                          this.auth.setUser(cod);
                                          this.router.navigate(['/home']);
                                        } else {
                                          alert('Codigo no es Correcto');
                                          cod = '';
                                          this.codigo = '';
                                          // this.router.navigate(['/login']);
                                        }
                                                        });

    } else {
      alert('Ingrese su código');
    }
  }

  onClose() {
    this.auth.logOut();
    window.close();
  }

}
