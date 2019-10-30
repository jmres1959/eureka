import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url = environment.URL;

  constructor(private http: HttpClient) {
    console.log('Servicio DATOS listo para usar');
  }

  datosactualizar(movimiento: any) {
    console.log('movimiento', movimiento);
    console.log('json', JSON.stringify(movimiento));
    return this.http.post(`${this.url}datosactualizar.php`, JSON.stringify(movimiento));
  }

}
