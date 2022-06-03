import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailchallengeComponent } from './detailchallenge.component';

describe('DetailchallengeComponent', () => {
  let component: DetailchallengeComponent;
  let fixture: ComponentFixture<DetailchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailchallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
