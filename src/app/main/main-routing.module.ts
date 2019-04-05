import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainAuthGuardService } from './main-auth-guard.service';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [MainAuthGuardService],
        component: MainComponent,
        children: [
        //   { path: 'home', loadChildren: './components/summary-panel/summary-panel.module#SummaryPanelModule' },
        //   { path: 'landing', loadChildren: './components/landing/landing.module#LandingModule' },
        //   { path: 'chat', loadChildren: './components/chat-page/chat-page.module#ChatPageModule' },
        //   { path: 'user-feedback', loadChildren: './components/user-feedback/user-feedback.module#UserFeedbackModule' },
        //   { path: 'profile', loadChildren: './components/profile/profile.module#ProfileModule' },
        //   { path: '/login', loadChildren: '../login/login.module#LoginModule' },
        //   { path: '', loadChildren: './components/summary-panel/summary-panel.module#SummaryPanelModule' },
        //   { path: '**', loadChildren: './components/summary-panel/summary-panel.module#SummaryPanelModule' }
        ]
      }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [MainAuthGuardService]
})
export class MainRoutingModule { }
