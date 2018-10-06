import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-matrix-header',
  templateUrl: './matrix-header.component.html',
  styleUrls: ['./matrix-header.component.css']
})
export class MatrixHeaderComponent implements OnInit {
  public skills: string[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skills = this.skillsService.getSkillsList();
  }

}
