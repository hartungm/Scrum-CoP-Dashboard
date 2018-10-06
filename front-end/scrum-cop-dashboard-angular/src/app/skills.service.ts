import { Injectable } from '@angular/core';
import { SKILLS_LIST } from './skills-list';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsList = SKILLS_LIST;

  constructor() { }

  getSkillsList(): string[] {
    return this.skillsList;
  }
}
