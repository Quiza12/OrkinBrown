import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrkinBrownHomeComponent } from './home/orkinbrown.home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        OrkinBrownHomeComponent
    ]
})
export class OrkinBrownModule { }
