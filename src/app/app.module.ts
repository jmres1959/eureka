import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { DocumentosService } from './services/documentos.service';
import { FinalistasService } from './services/finalista.service';
import { DatosService } from './services/datos.service';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DatosComponent } from './components/datos/datos.component';
import { FormatosComponent } from './components/formatos/formatos.component';
import { FormatoComponent } from './components/formato/formato.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DatosComponent,
    FormatosComponent,
    FormatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    DocumentosService,
    FinalistasService,
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
