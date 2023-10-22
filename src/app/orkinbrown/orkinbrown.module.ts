import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrkinBrownHomeComponent } from './home/orkinbrown.home.component';
import { OrkinBrownAboutComponent } from './about/orkinbrown.about.component';
import { OrkinBrownTeamComponent } from './team/orkinbrown.team.component';
import { OrkinBrownServicesComponent } from './services/orkinbrown.services.component';
import { OrkinBrownTestimonialsComponent } from './testimonials/orkinbrown.testimonials.component';
import { OrkinBrownJobsComponent } from './jobs/orkinbrown.jobs.component';
import { OrkinBrownContactComponent } from './contact/orkinbrown.contact.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        OrkinBrownHomeComponent,
        OrkinBrownAboutComponent,
        OrkinBrownTeamComponent,
        OrkinBrownServicesComponent,
        OrkinBrownTestimonialsComponent,
        OrkinBrownJobsComponent,
        OrkinBrownContactComponent
    ]
})
export class OrkinBrownModule { }
