import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Latnivalo } from '../latnivalok.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-latnivalok-items',
  standalone: true,
  imports: [CommonModule,
     MatIconModule, 
     MatExpansionModule
    ],
  templateUrl: './latnivalok-items.component.html',
  styleUrl: './latnivalok-items.component.scss'
})
export class LatnivalokItemsComponent {

  @Input() latnivalo!: Latnivalo;
  @Output() kedvenc = new EventEmitter<Latnivalo>(); 


  togglekedvenc(latnivalo: Latnivalo): void{
    latnivalo.kedvenc = !latnivalo.kedvenc;
  }
}
