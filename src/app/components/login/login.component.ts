import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  codigo: string;
  constructor(private auth: AuthService, private app: AppComponent, private router: Router) {
    app.pageSetting = {
      header: false,
      footer: false
    };
  }

  ngOnInit() {
  }

  onLogin() {
    if (this.codigo !== '' && this.codigo !== undefined) {
      this.auth.setUser({codigo: this.codigo});
      this.router.navigate(['/home']);
    } else {
      alert('Ingrese su código');
    }
    console.log(this.codigo);
  }

  onClose() {
    window.close();
  }
}
