import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavalsComponent } from './navals.component';

describe('NavalsComponent', () => {
  let component: NavalsComponent;
  let fixture: ComponentFixture<NavalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
