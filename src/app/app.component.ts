import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'Balaton';

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
}
