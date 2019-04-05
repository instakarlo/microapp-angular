import { NgModule } from '@angular/core';
import {
    UIShellModule
} from 'carbon-components-angular';

import {
    NavbarComponent
} from './navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        UIShellModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule { }
