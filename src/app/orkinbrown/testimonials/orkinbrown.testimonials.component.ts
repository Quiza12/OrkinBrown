import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../classes/testimonial';
import { Testimonials } from '../../data/testimonials.service';


@Component({
    selector: 'orkinbrown-app-testimonials',
    templateUrl: './orkinbrown.testimonials.component.html',
    styleUrls: ['./orkinbrown.testimonials.component.scss']
})

export class OrkinBrownTestimonialsComponent implements OnInit {
  focus: any;
  focus1: any;
  testimomnials: Testimonial[];

  constructor() { }

  ngOnInit() {
    this.testimomnials = new Testimonials().testimonials;
  }

}
