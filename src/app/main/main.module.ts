import { NgModule } from '@angular/core';
import { NavbarModule } from '../_shared/navbar/navbar.module';
import { SidebarModule } from '../_shared/sidebar/sidebar.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    NavbarModule,
    SidebarModule
  ],
  providers: [],
  exports: [MainComponent]
})
export class MainModule { }
