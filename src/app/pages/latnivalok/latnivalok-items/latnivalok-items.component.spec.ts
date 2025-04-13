import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatnivalokItemsComponent } from './latnivalok-items.component';

describe('LatnivalokItemsComponent', () => {
  let component: LatnivalokItemsComponent;
  let fixture: ComponentFixture<LatnivalokItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatnivalokItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatnivalokItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
