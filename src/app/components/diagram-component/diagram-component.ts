import { Component, input } from '@angular/core';
import { DiagramSection } from '../../models';
import { DiagramCardComponent } from '../diagram-card-component/diagram-card-component';

@Component({
  imports: [DiagramCardComponent],
  selector: 'diagram-component',
  templateUrl: './diagram-component.html',
})
export class DiagramComponent {
  diagrams = input<DiagramSection[]>([]);
}
