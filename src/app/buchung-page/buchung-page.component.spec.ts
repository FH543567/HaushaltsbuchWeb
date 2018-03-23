import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungPageComponent } from './buchung-page.component';

describe('BuchungPageComponent', () => {
  let component: BuchungPageComponent;
  let fixture: ComponentFixture<BuchungPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
