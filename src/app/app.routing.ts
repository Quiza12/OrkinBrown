import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { OrkinBrownHomeComponent } from './orkinbrown/home/orkinbrown.home.component';
import { OrkinBrownAboutComponent } from './orkinbrown/about/orkinbrown.about.component';
import { OrkinBrownTeamComponent } from './orkinbrown/team/orkinbrown.team.component';
import { OrkinBrownServicesComponent } from './orkinbrown/services/orkinbrown.services.component';
import { OrkinBrownJobsComponent } from './orkinbrown/jobs/orkinbrown.jobs.component';
import { OrkinBrownTestimonialsComponent } from './orkinbrown/testimonials/orkinbrown.testimonials.component';
import { OrkinBrownContactComponent } from './orkinbrown/contact/orkinbrown.contact.component';
import { OrkinBrownContactResultComponent } from './orkinbrown/contact/orkinbrown.contact.result.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    { path: 'home',             component: OrkinBrownHomeComponent },
    { path: 'about',            component: OrkinBrownAboutComponent },
    { path: 'contact',          component: OrkinBrownContactComponent },
    { path: 'contact/:result',  component: OrkinBrownContactResultComponent },
    { path: 'services',         component: OrkinBrownServicesComponent },
    { path: 'team',             component: OrkinBrownTeamComponent },
    { path: 'testimonials',     component: OrkinBrownTestimonialsComponent },
    { path: 'jobs',             component: OrkinBrownJobsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
