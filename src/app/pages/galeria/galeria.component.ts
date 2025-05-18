import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  cities = [
    {
      name: 'Siofok',
      images: [
        '\images\siofok\siofok_viztorony.jpg',
        '\images\siofok\siofok_plazs.jpg',
        '\images\siofok\siofok_nagystrand.webp'
      ]
    },
    {
      name: 'Balatonföldvár',
      images: [
        '\images\balatonfoldvar\balatonfoldvar_latkep.jpg',
        '\images\balatonfoldvar\balatonfoldvar_logo.jpg',
        '\images\balatonfoldvar\balatonfoldvar_mgas.jpeg'
      ]
    },
    {
      name: 'Balatonboglár',
      images: [
        '\images\balatonboglar\balatonboglar_felulrol.jpg/debrecen1.jpg',
        '\images\balatonboglar\Balatonboglar_gombkilato.jpg',
        '\images\balatonboglar\balatonboglar-platanstrand.jpg'
      ]
    }
  ];

}


