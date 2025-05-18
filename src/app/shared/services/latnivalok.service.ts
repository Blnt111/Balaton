import { Injectable } from '@angular/core';
import { Latnivalo } from '../varosok/varos';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatnivalokService {

  private latnivalok: Latnivalo[] = [
    {
      id: 1,
      v_name: 'Siófok',
      leiras: 'Siófok a Balaton déli partján található, és nyáron tökéletes úti cél azok számára, akik a pihenésre és szórakozásra is vágynak. A város híres a strandjairól, melyek a napozásra és a vízi sportokra is ideálisak. Siófokon rengeteg szórakozási lehetőség vár, mint például éttermek, és a híres Balaton Sound fesztivál.',
      kedvenc: false
    },
    {
      id: 2,
      v_name: 'Balatonföldvár',
      leiras: 'Balatonföldvár a Balaton déli partjának egyik gyöngyszeme, amely nyáron ideális választás mind a családok, mind a fiatalok számára. A város híres a rendezett strandjairól, a csodálatos naplementékről és a hangulatos sétányokról. A kikötő és a vitorlás élet központja, de emellett rengeteg étterem és kávézó is várja a látogatókat.',
      kedvenc: false
    },
    {
      id: 3,
      v_name: 'Balatonboglár',
      leiras: 'Balatonboglár egy nyugodt, de mégis pezsgő város. A város tengerpartja tökéletes helyszín a pihenéshez és a vízi sportokhoz. A híres "Szőlőhegy" és a kilátó fantasztikus panorámát kínál a Balatonra, míg a város központjában hangulatos éttermek várják a látogatókat. Balatonboglár a fiatalok körében is népszerű, hiszen a város nyáron több szórakoztató rendezvénynek is helyet ad.',
      kedvenc: false 
    }
  ]

  private latnivaloSubject = new BehaviorSubject<Latnivalo[]>(this.latnivalok);



  constructor() { }

  getAllLatnivalok(): Observable<Latnivalo[]> {
    return this.latnivaloSubject.asObservable();
  }


  addLatnivalo(task: Omit<Latnivalo, 'id'>): Promise<Latnivalo> {
    return new Promise((resolve) => {
      const newId = this.latnivalok.length > 0 
        ? Math.max(...this.latnivalok.map(t => t.id)) + 1 
        : 1;
      
      const newLatnivalo: Latnivalo = {
        ...task,
        id: newId
      };
      
      this.latnivalok.push(newLatnivalo);
      
      this.latnivaloSubject.next([...this.latnivalok]);
      
      setTimeout(() => {
        resolve(newLatnivalo);
      }, 1000);
    });
  }
}


