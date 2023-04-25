import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Romancechild1Component } from './romancechild1.component';

describe('Romancechild1Component', () => {
  let component: Romancechild1Component;
  let fixture: ComponentFixture<Romancechild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Romancechild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Romancechild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
