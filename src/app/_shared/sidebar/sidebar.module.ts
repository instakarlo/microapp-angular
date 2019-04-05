import { NgModule } from '@angular/core';
import {
    UIShellModule
} from 'carbon-components-angular';

import {
    SidebarComponent
} from './sidebar.component';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        UIShellModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }
