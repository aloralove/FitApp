import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnutritionComponent } from './detailnutrition.component';

describe('DetailnutritionComponent', () => {
  let component: DetailnutritionComponent;
  let fixture: ComponentFixture<DetailnutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
