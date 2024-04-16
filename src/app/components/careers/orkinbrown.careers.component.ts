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
  jobCards: Job[];
  submissionEmail: string = "Quiza12@live.com";

  constructor() { }

  ngOnInit() {
    this.jobCards = new JobCards().jobCards;
  }

}
