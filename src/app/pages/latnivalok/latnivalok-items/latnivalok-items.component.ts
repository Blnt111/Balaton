import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Latnivalo } from '../../../shared/varosok/varos';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-latnivalok-items',
  standalone: true,
  imports: [CommonModule,
     MatIconModule, 
     MatExpansionModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule
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
