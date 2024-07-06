import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardBusinessComponent } from './app-card-business.component';

describe('AppCardBusinessComponent', () => {
  let component: AppCardBusinessComponent;
  let fixture: ComponentFixture<AppCardBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCardBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCardBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
