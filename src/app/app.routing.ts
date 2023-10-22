import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { OrkinBrownHomeComponent } from './orkinbrown/home/orkinbrown.home.component';
import { OrkinBrownAboutComponent } from './orkinbrown/about/orkinbrown.about.component';
import { OrkinBrownTeamComponent } from './orkinbrown/team/orkinbrown.team.component';
import { OrkinBrownServicesComponent } from './orkinbrown/services/orkinbrown.services.component';
import { OrkinBrownJobsComponent } from './orkinbrown/jobs/orkinbrown.jobs.component';
import { OrkinBrownTestimonialsComponent } from './orkinbrown/testimonials/orkinbrown.testimonials.component';
import { OrkinBrownContactComponent } from './orkinbrown/contact/orkinbrown.contact.component';

const routes: Routes =[
    { path: '', redirectTo: 'ob', pathMatch: 'full' },
    
    { path: 'ob',               component: OrkinBrownHomeComponent },
    { path: 'ob/about',         component: OrkinBrownAboutComponent },
    { path: 'ob/contact',       component: OrkinBrownContactComponent },
    { path: 'ob/services',      component: OrkinBrownServicesComponent },
    { path: 'ob/team',          component: OrkinBrownTeamComponent },
    { path: 'ob/testimonials',  component: OrkinBrownTestimonialsComponent },
    { path: 'ob/jobs',          component: OrkinBrownJobsComponent },

    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
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
