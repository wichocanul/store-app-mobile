import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/authService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    user: ['', Validators.required],
    password: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['/auth']);
  }

  async register() {
    if (this.registerForm.invalid) {
      const message: string = 'campos invalidos, por favor revisa tus datos';
      this.showAlert(message);
      return;
    }

    const { email, user, password } = this.registerForm.value;

    this.authService.register(email, user, password).subscribe({
      next: (ok) => {
        if (ok == 'success') {
          this.router.navigateByUrl('/store');
        } else {
          const message: string = 'El correo ya existe intenta con otro';
          this.showAlert(message);
        }
      },
    });
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
