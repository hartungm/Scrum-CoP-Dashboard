import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill-square',
  templateUrl: './skill-square.component.html',
  styleUrls: ['./skill-square.component.css']
})
export class SkillSquareComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
