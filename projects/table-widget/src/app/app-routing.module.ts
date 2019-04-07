import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'table-widget',
    component: TableComponent
  },
  {
    path: '**',
    component: TableComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: []
})
export class AppRoutingModule { }
