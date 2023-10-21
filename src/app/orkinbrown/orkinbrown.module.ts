import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrkinBrownHomeComponent } from './home/orkinbrown.home.component';
import { OrkinBrownAboutComponent } from './about/orkinbrown.about.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        OrkinBrownHomeComponent,
        OrkinBrownAboutComponent
    ]
})
export class OrkinBrownModule { }
