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

  @ViewChildren('asBtnContainer') btnContainer!: QueryList<ElementRef>;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private authService: AuthService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.userActive = this.authService.statusSesion();
  }

  auth() {
    this.router.navigate(['/auth']);
  }

  redirect(url: string) {
    this.menuController.close();
    this.router.navigate([`store/${url}`]);
  }

  setActiveClass() {
    this.userActive = this.authService.statusSesion();
    const currentUrl = this.removeStore(this.router.url);

    if (currentUrl == '') {
      this.renderer.addClass(this.btnContainer.get(0)?.nativeElement, 'active');
    } else {
      this.addClass(currentUrl);
    }
  }

  addClass(text: string) {
    for (let i = 0; i < this.btnContainer.length; i++) {
      this.renderer.removeClass(
        this.btnContainer.get(i)?.nativeElement,
        'active'
      );
    }

    for (let i = 0; i < this.btnContainer.length; i++) {
      if (this.btnContainer.get(i)?.nativeElement.getAttribute('url') == text) {
        this.renderer.addClass(
          this.btnContainer.get(i)?.nativeElement,
          'active'
        );
      }
    }
  }

  removeStore(text: string): string {
    if (text.length >= 7) {
      return text.slice(7);
    } else {
      return '';
    }
  }
}
