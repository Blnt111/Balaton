import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, collection, query, where, getDocs } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/Users';
import { Latnivalo } from '../varosok/varos';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) { }

  getUserProfile(): Observable<{
    user: User | null,
    kedvencek: Latnivalo[],
  }> {
    return this.authService.currentUser.pipe(
      switchMap(authUser => {
        if (!authUser) {
          return of({
            user: null,
            kedvencek: [],
          });
        }

        return from(this.fetchUserWithTasks(authUser.uid));
      })
    );
  }



  private async fetchUserWithTasks(userId: string): Promise<{
    user: User | null,
    kedvencek: Latnivalo[],
  }> {
    try {
      // Felhasználó adatainak lekérése
      const userDocRef = doc(this.firestore, 'Users', userId);
      const userSnapshot = await getDoc(userDocRef);
      
      if (!userSnapshot.exists()) {
        return {
          user: null,
          kedvencek: [],
        };
      }

      const userData = userSnapshot.data() as User;
      const user = { ...userData, id: userId };
      

      return {
        user,
        kedvencek: [],
      };
    } catch (error) {
      console.error('Hiba a felhasználói adatok betöltése során:', error);
      return {
        user: null,
        kedvencek: [],
      };
    }
  }
  

}
