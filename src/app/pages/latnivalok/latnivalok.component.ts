import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

export interface Latnivalo {
  id: number;
  v_name: string;
  leiras: string;
  kedvenc: boolean;
}

@Component({
  selector: 'app-latnivalok',
  imports: [
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatExpansionModule
  ],
  templateUrl: './latnivalok.component.html',
  styleUrl: './latnivalok.component.scss'
})
export class LatnivalokComponent {

  @Input() title: string = 'Látnivalók';
  @Output() latnivaloAdded = new EventEmitter<Latnivalo>();


  ujvarosnev: string = '';
  ujvarosleiras: string= '';


  latnivalok: Latnivalo[] = [
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


  addLatnivalo(): void{
    if (this.ujvarosnev.trim()){
      const ujvaros: Latnivalo = {
        id: this.latnivalok.length+1,
        v_name: this.ujvarosnev.trim(),
        leiras: this.ujvarosleiras.trim(),
        kedvenc: false
      };

      this.latnivalok.push(ujvaros);
      this.latnivaloAdded.emit(ujvaros);
      this.ujvarosnev = '';
      this.ujvarosleiras = '';
    }
  }


  togglekedvenc(latnivalo: Latnivalo): void{
    latnivalo.kedvenc = !latnivalo.kedvenc;
  }

  trackById(index: number, item: Latnivalo): number {
    return item.id;
  }


}
