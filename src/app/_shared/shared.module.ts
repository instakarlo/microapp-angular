import { NgModule } from '@angular/core';
import {
    UIShellModule
} from 'carbon-components-angular';

import {
    NavbarComponent,
    SidebarComponent
} from './index';

@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        UIShellModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        NavbarComponent,
        SidebarComponent
    ]
})
export class SharedModule { }
