import { Component } from '@angular/core';

@Component({
  selector: 'app-architecture',
  standalone: true,
  templateUrl: './architecture.html',
  styleUrl: './architecture.scss',
})
export class Architecture {
  readonly layers = [
    { number: '01', title: 'Presentation', detail: 'Standalone Angular components', icon: '▦' },
    {
      number: '02',
      title: 'Application logic',
      detail: 'Services and application state',
      icon: '⌘',
    },
    { number: '03', title: 'Data communication', detail: 'HTTP and API integration', icon: '⇄' },
  ];
}
