import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
export class DocumentosService {

    url = environment.URL;
    path = environment.PATH;
    urlPrueba: string;

    constructor(private http: HttpClient) {
        console.log('Servicio DOCUMENTOS listo para usar');
    }

    documentoslistar(idf: string) {
        return this.http.get(`${this.url}documentoslistar.php?idf=${idf}`);
    }

    uploadFile(archivo: any) {
        return this.http.post(`${this.url}subirarchivo.php`, JSON.stringify(archivo));
      }

    borraFile(cod: string, id: number, rut: string) {
        console.log(cod, id, rut);
        this.urlPrueba = `${this.url}borrararchivo.php?cod=${cod}&id=${id}&rut="${rut}"`;
        console.log(this.urlPrueba);
        return this.http.get(`${this.url}borrararchivo.php?cod=${cod}&id=${id}&rut="${rut}"`);
      }

}
