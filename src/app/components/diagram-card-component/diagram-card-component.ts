import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ImageViewerDirective, ImageViewerPictureDirective } from '@ngstarter-ui/components/image-viewer';
import { DiagramData } from '../../models';

@Component({
  imports: [MatCardModule, MatButtonModule, ImageViewerDirective, ImageViewerPictureDirective],
  selector: 'diagram-card-component',
  templateUrl: './diagram-card-component.html',
  host: { class: 'block' },
})
export class DiagramCardComponent {
  diagram = input.required<DiagramData>();
}
