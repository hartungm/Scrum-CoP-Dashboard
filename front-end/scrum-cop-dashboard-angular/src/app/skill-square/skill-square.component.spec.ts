import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSquareComponent } from './skill-square.component';

describe('SkillSquareComponent', () => {
  let component: SkillSquareComponent;
  let fixture: ComponentFixture<SkillSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
