import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceComponent } from './romance.component';

describe('RomanceComponent', () => {
  let component: RomanceComponent;
  let fixture: ComponentFixture<RomanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
