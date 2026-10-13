import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ImageViewerDirective, ImageViewerPictureDirective } from '@ngstarter-ui/components/image-viewer';

@Component({
  imports: [
    MatCardModule, 
    MatButtonModule, 
    ImageViewerDirective, 
    ImageViewerPictureDirective
  ],
  selector: 'persistence-diagram',
  templateUrl: './persistence-diagram.html',
  styleUrl: './persistence-diagram.scss'
})
export class PersistenceDiagram {
    persistenceDiagramData = {
        cardTitle: "Optional persistence? How does that work?",
        assetSrc: "../../../../assets/persistence.png",
        githubLink: "https://github.com/Harshitv21/raydash/blob/32a7518b497cf471d233f59a6c1eedfb1d8cb077/diagrams/persistence.png"
    }
}