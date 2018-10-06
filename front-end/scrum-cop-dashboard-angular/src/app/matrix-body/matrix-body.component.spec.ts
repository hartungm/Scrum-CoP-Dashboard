import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixBodyComponent } from './matrix-body.component';

describe('MatrixBodyComponent', () => {
  let component: MatrixBodyComponent;
  let fixture: ComponentFixture<MatrixBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
