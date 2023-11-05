import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'orkinbrown-app-contact-result',
    templateUrl: './orkinbrown.contact.result.component.html',
    styleUrls: ['./orkinbrown.contact.component.scss']
})

export class OrkinBrownContactResultComponent implements OnInit {
  focus: any;
  focus1: any;
  result: string;

  header: string;
  image: string;
  firstMessage: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.result = this.activatedRoute.snapshot.paramMap.get("result");
    this.determineResponse();
  }

  determineResponse() {
    if (this.result === "success") {
      this.header = "Thanks for contacting us";
      this.image = "assets/img/orkinbrown/contact/success.svg";
      this.firstMessage = "We\'ll be in touch within 24 hours.";
    } else {
      this.header = "Uh Oh!";
      this.image = "assets/img/orkinbrown/contact/error.svg";
      this.firstMessage = "Something\'s gone wrong. Please email us at orkin@tci.co.za instead.";
    }
  }

}
