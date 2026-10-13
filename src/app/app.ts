import { Component } from '@angular/core';

import { DiagramComponent } from './components/diagram-component/diagram-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { FeatureComponent } from './components/feature-component/feature-component';
import { ClientComponent } from './components/client-component/client-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { RAYDASH_DATA } from './raydash-content';

@Component({
  selector: 'app-root',
  imports: [
    DiagramComponent,
    FooterComponent,
    FeatureComponent,
    ClientComponent,
    NavbarComponent,
  ],
  templateUrl: './app.html',
})
export class App { raydashData = RAYDASH_DATA; }
