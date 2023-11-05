import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { OrkinBrownHomeComponent } from './components/home/orkinbrown.home.component';
import { OrkinBrownAboutComponent } from './components/about/orkinbrown.about.component';
import { OrkinBrownTeamComponent } from './components/team/orkinbrown.team.component';
import { OrkinBrownServicesComponent } from './components/services/orkinbrown.services.component';
import { OrkinBrownJobsComponent } from './components/jobs/orkinbrown.jobs.component';
import { OrkinBrownTestimonialsComponent } from './components/testimonials/orkinbrown.testimonials.component';
import { OrkinBrownContactComponent } from './components/contact/orkinbrown.contact.component';
import { OrkinBrownContactResultComponent } from './components/contact/orkinbrown.contact.result.component';

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
