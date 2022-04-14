import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresTuristicosComponent } from './lugares-turisticos.component';

describe('LugaresTuristicosComponent', () => {
  let component: LugaresTuristicosComponent;
  let fixture: ComponentFixture<LugaresTuristicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresTuristicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
