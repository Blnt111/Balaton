import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LatnivalokComponent } from './pages/latnivalok/latnivalok.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'latnivalok',
        loadComponent: () => import('./pages/latnivalok/latnivalok.component').then(m => m.LatnivalokComponent),
    },
    { 
        path: 'galeria',
        loadComponent: () => import('./pages/galeria/galeria.component').then(m => m.GaleriaComponent), 
    },

    { path: 'profile', component: ProfileComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', component: HomeComponent }

];
