import { Component, OnInit } from '@angular/core';
import { ScrumMasterService } from '../scrum-master.service';
import { ScrumMaster } from '../scrum-master';

@Component({
  selector: 'app-matrix-body',
  templateUrl: './matrix-body.component.html',
  styleUrls: ['./matrix-body.component.css']
})
export class MatrixBodyComponent implements OnInit {
  private scrumMasters: ScrumMaster[];

  constructor(private scrumMasterService: ScrumMasterService) { }

  ngOnInit() {
    this.scrumMasters = this.getScrumMasters();
  }

  getScrumMasters(): ScrumMaster[] {
    return this.scrumMasterService.getScrumMasters();
  }
}
