import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIShellModule } from 'carbon-components-angular';
import { MainComponent } from './main.component';
import { NavbarComponent, SidebarComponent } from './components/index';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UIShellModule],
      declarations: [MainComponent, NavbarComponent, SidebarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
