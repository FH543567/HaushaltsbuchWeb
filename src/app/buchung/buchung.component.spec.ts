import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungComponent } from './buchung.component';

describe('BuchungComponent', () => {
  let component: BuchungComponent;
  let fixture: ComponentFixture<BuchungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
