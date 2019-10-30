import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class FinalistasService {

    url = environment.URL;
    resultado: any;

    constructor(private http: HttpClient) {
        console.log('Servicio FINALISTAS listo para usar');
    }

    finalistaseleccionar(id: string) {
        console.log(`${this.url}finalistaseleccionar.php?id=${id}`);
        return this.http.get(`${this.url}finalistaseleccionar.php?id=${id}`);
      }

}