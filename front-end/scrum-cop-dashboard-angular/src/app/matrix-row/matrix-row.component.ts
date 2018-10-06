import { Component, OnInit, Input } from '@angular/core';
import { SKILLS_LIST } from '../skills-list';
import { ScrumMaster } from '../scrum-master';

@Component({
  selector: 'app-matrix-row',
  templateUrl: './matrix-row.component.html',
  styleUrls: ['./matrix-row.component.css']
})
export class MatrixRowComponent implements OnInit {
  @Input() scrumMaster: ScrumMaster;
  public skillsList: string[];

  constructor() { }

  ngOnInit() {
    this.skillsList = this.getSkillsList();
  }

  getSkillsList(): string[] {
    return SKILLS_LIST;
  }
}
