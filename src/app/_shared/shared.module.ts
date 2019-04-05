import { NgModule } from '@angular/core';
import {
    UIShellModule
} from 'carbon-components-angular';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        UIShellModule
    ],
    providers: [],
    bootstrap: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class SharedModule { }
