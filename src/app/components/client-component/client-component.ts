import { Component, Input } from '@angular/core';

interface IndividualClient {
  clientName: string;
  links: LinkObject[];
}
interface LinkObject {
  linkTitle: string;
  link: string;
}

@Component({
  imports: [],
  selector: 'client-component',
  templateUrl: './client-component.html',
})
export class ClientComponent {
  @Input() clients: IndividualClient[] = [];
}
