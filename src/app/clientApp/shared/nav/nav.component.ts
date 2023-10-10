import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/service/authService/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  userActive: boolean = false;
  user: string = '';

  constructor(
    private router: Router,
    private menuController: MenuController,
    private authService: AuthService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.userActive = this.authService.statusSesion();
    localStorage.getItem('user') ? this.user = localStorage.getItem('user')! : this.user = '';
    this.menuController.close();
  }

  auth() {
    this.router.navigate(['/auth']);
    this.closeTab();
  }

  closeTab() {
    this.menuController.close();
  }
}
