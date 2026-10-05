import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'feature-component',
  templateUrl: './feature-component.html',
})

export class FeatureComponent {
  @Input() features: string[] = [];
}
