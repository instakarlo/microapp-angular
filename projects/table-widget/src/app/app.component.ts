import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  // selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  @Input('state')
  set state(state: string) {
    console.debug('table-widget received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(
    private router: Router) {
  }

  ngOnInit() {

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?

    // Standalone mode
    if (environment.standalone) {
      this.router.navigate(['/table-widget']);
    }

    // just for demonstration!
    setTimeout(() => {
      this.message.next('table-widget initialized!');
    }, 2000);

  }
}
