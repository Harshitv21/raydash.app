import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ImageViewerDirective, ImageViewerPictureDirective } from '@ngstarter-ui/components/image-viewer';

interface DiagramItem {
  heading: string;
  cardTitle: string;
  assetSrc: string;
  githubLink: string;
}

@Component({
  imports: [
    MatCardModule, 
    MatButtonModule, 
    ImageViewerDirective, 
    ImageViewerPictureDirective
  ],
  selector: 'diagram-component',
  templateUrl: './diagram-component.html',
  styleUrl: './diagram.component.scss'
})
export class DiagramComponent {
  @Input() diagrams: DiagramItem[] = [];
}
