import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      projectId: "balaton-528b5",
      appId: "1:842445317132:web:4ef971672c70f6415eba29",
      storageBucket: "balaton-528b5.firebasestorage.app",
      apiKey: "AIzaSyDKLXUg_Ho_8cLI32b8X-mfYHObFqUZX8c",
      authDomain: "balaton-528b5.firebaseapp.com",
      messagingSenderId: "842445317132",
    })),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
  ]
};
