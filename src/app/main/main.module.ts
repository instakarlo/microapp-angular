import { NgModule } from '@angular/core';
import { UIShellModule } from 'carbon-components-angular';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { NavbarComponent, SidebarComponent } from './components/index';

@NgModule({
    declarations: [
        MainComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        MainRoutingModule,
        UIShellModule
    ],
    providers: [],
    exports: [MainComponent]
})
export class MainModule { }
