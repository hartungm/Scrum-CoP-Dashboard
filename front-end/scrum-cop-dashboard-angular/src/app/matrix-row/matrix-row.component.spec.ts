import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixRowComponent } from './matrix-row.component';

describe('MatrixRowComponent', () => {
  let component: MatrixRowComponent;
  let fixture: ComponentFixture<MatrixRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
