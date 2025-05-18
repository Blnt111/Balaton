import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatnivalokComponent } from './latnivalok.component';

describe('LatnivalokComponent', () => {
  let component: LatnivalokComponent;
  let fixture: ComponentFixture<LatnivalokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatnivalokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatnivalokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


