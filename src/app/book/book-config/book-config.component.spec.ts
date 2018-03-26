import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConfigComponent } from './book-config.component';

describe('BookConfigComponent', () => {
  let component: BookConfigComponent;
  let fixture: ComponentFixture<BookConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
