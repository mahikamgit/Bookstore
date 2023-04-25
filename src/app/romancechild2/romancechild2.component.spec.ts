import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Romancechild2Component } from './romancechild2.component';

describe('Romancechild2Component', () => {
  let component: Romancechild2Component;
  let fixture: ComponentFixture<Romancechild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Romancechild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Romancechild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
