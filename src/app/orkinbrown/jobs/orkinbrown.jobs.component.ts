import { Component, OnInit } from '@angular/core';
import { Job } from '../../classes/job';
import { JobCards } from '../../data/job-cards.service';

@Component({
    selector: 'orkinbrown-app-jobs',
    templateUrl: './orkinbrown.jobs.component.html',
    styleUrls: ['./orkinbrown.jobs.component.scss']
})

export class OrkinBrownJobsComponent implements OnInit {
  focus: any;
  focus1: any;
  jobCards: Job[];
  submissionEmail: string = "Quiza12@live.com";

  constructor() { }

  ngOnInit() {
    this.jobCards = new JobCards().jobCards;
  }

}
