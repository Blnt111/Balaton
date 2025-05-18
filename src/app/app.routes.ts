import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LatnivalokComponent } from './pages/latnivalok/latnivalok.component';
import { authGuard, publicGuard } from './shared/guards/auth/auth.guard';

export const routes: Routes = [
    { path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'latnivalok',
        loadComponent: () => import('./pages/latnivalok/latnivalok.component').then(m => m.LatnivalokComponent),
        //canActivate: [authGuard]
    },
    { 
        path: 'galeria',
        loadComponent: () => import('./pages/galeria/galeria.component').then(m => m.GaleriaComponent),
        canActivate: [authGuard]
    },

    { path: 'profile',
        loadComponent: () => import ('./pages/profile/profile.component').then (m => m.ProfileComponent),
        canActivate: [authGuard]
    },

    { path: 'login',
        loadComponent: () => import ('./pages/login/login.component').then (m => m.LoginComponent),
        canActivate: [publicGuard]
    },

    { path: 'signup',
        loadComponent: () => import ('./pages/signup/signup.component').then (m => m.SignupComponent),
        canActivate: [publicGuard]
    },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', component: HomeComponent }

];
