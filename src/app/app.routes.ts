import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DatosComponent } from './components/datos/datos.component';
import { FormatosComponent } from './components/formatos/formatos.component';
import { FormatoComponent } from './components/formato/formato.component';
import { AuthGuard } from './providers/auth.guard';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'datos', component: DatosComponent, canActivate: [AuthGuard] },
    { path: 'formatos', component: FormatosComponent, canActivate: [AuthGuard] },
    { path: 'formato/:nombre/:id', component: FormatoComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
