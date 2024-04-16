import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { OrkinBrownHomeComponent } from './home/orkinbrown.home.component';
import { OrkinBrownAboutComponent } from './about/orkinbrown.about.component';
import { OrkinBrownTeamComponent } from './team/orkinbrown.team.component';
import { OrkinBrownServicesComponent } from './services/orkinbrown.services.component';
import { OrkinBrownTestimonialsComponent } from './testimonials/orkinbrown.testimonials.component';
import { OrkinBrownCareersComponent } from './careers/orkinbrown.careers.component';
import { OrkinBrownContactComponent } from './contact/orkinbrown.contact.component';
import { AzureService } from 'app/shared/services/azure.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        OrkinBrownHomeComponent,
        OrkinBrownAboutComponent,
        OrkinBrownTeamComponent,
        OrkinBrownServicesComponent,
        OrkinBrownTestimonialsComponent,
        OrkinBrownCareersComponent,
        OrkinBrownContactComponent
    ],
    providers: [
        AzureService
    ]
})
export class OrkinBrownModule { }
