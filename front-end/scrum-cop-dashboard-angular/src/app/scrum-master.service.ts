import { Injectable } from '@angular/core';
import { ScrumMaster } from './scrum-master';
import { MOCK_SM_SKILLS } from './mock-sm-skills';

@Injectable({
  providedIn: 'root'
})
export class ScrumMasterService {

  constructor() { }

  getScrumMasters(): ScrumMaster[] {
    return MOCK_SM_SKILLS;
  }
}
