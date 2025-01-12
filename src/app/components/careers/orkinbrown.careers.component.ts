import { Component, OnInit } from '@angular/core';
import { Job } from '../../classes/job';
import { JobCards } from '../../data/job-cards.service';

@Component({
    selector: 'orkinbrown-app-careers',
    templateUrl: './orkinbrown.careers.component.html',
    styleUrls: ['./orkinbrown.careers.component.scss']
})

export class OrkinBrownCareersComponent implements OnInit {
  focus: any;
  focus1: any;
  auditJobCards: Job[];
  taxationJobCards: Job[];
  submissionEmail: string = "hilton@orkinbrown.co.za";

  constructor() { }

  ngOnInit() {
    this.auditJobCards = new JobCards().auditJobCards;
    this.taxationJobCards = new JobCards().taxationJobCards;
  }

}
