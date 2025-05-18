

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { Latnivalo } from '../../shared/varosok/varos';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LatnivalokService } from '../../shared/services/latnivalok.service';


@Component({
  selector: 'app-latnivalok',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    FormsModule,
    CommonModule
  ],
  providers: [FormBuilder],
  templateUrl: './latnivalok.component.html',
  styleUrl: './latnivalok.component.scss',
  //standalone: true
})
export class LatnivalokComponent implements OnInit{


  title: string = 'Látnivalók';

  displayedColumns: string[] = ['kedvenc', 'v_name', 'leiras'];
  varosForm!: FormGroup;
  latnivalok: Latnivalo[] = []

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private latnivaloService: LatnivalokService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadLatnivalok();
  }

  initializeForm(): void {
    this.varosForm = this.fb.group({
      v_name: ['', [Validators.required]],
      leiras: ['', [Validators.required, Validators.maxLength(350)]]
    });
  }

  loadLatnivalok(): void {
    this.latnivaloService.getAllLatnivalok().subscribe(latnivalok => {
      this.latnivalok = latnivalok;
      console.log('Latnivalok loaded with observable');
    });
  }

  addLatnivalo(): void{
    if (this.varosForm.valid) {
      this.isLoading = true;
      const formValue = this.varosForm.value;
      
      const newLatnivalo: Omit<Latnivalo, 'id'> = {
        v_name: formValue.v_name,
        leiras: formValue.leiras,
        kedvenc: false
      };
      

      this.latnivaloService.addLatnivalo(newLatnivalo)
        .then(addedLatnivalo => {
          console.log('New Varos added with promise', addedLatnivalo);
          
          this.varosForm.reset();
          
          this.loadLatnivalok();
        })
        .finally(() => {
          this.isLoading = false;
        }); 
      } else {
        Object.keys(this.varosForm.controls).forEach(key => {
          const control = this.varosForm.get(key);
          control?.markAsTouched();
      });
    }
  }

  togglekedvenc(latnivalo: Latnivalo): void{
    latnivalo.kedvenc = !latnivalo.kedvenc;
  }

  trackById(index: number, item: Latnivalo): number {
    return item.id;
  }
}


