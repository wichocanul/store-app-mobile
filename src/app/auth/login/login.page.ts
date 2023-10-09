import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private alertController: AlertController
  ) {}

  ngOnInit() {}

  async login() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (ok) => {
        if (ok == 'success') {
          this.router.navigateByUrl('/store');
        } else {
          this.showAlert();
        }
      },
    });
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrecto',
      buttons: ['OK']
    });

    await alert.present();
  }
}
