import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Feature } from '../../models';
import { TerminalComponent } from '../terminal-component/terminal-component';
import { DiagramCardComponent } from '../diagram-card-component/diagram-card-component';

// ngComponentOutlet is gone. it was needed when every feature was a DIFFERENT
// component. now three of them are the same terminal component with different
// data, so the template just checks which body a feature has and renders it.
// that also means app.ts no longer imports demo components.
@Component({
  imports: [MatCardModule, MatButtonModule, TerminalComponent, DiagramCardComponent],
  selector: 'feature-component',
  templateUrl: './feature-component.html',
})
export class FeatureComponent {
  features = input<Feature[]>([]);
}
