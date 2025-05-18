import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LatnivalokComponent } from './pages/latnivalok/latnivalok.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink, 
    MatButtonModule,
    MatToolbarModule,
    MenuComponent, 
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Balaton';
  isLoggedIn = false;
  private authSubscription?: Subscription;

  constructor(private authService: AuthService) {}

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
      localStorage.setItem('isLoggedIn', this.isLoggedIn ? 'true' : 'false');
    });
  }

  logout(): void {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}



