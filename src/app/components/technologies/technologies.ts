import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {
  readonly technologies = [
    { name: 'Angular', type: 'Frontend framework', mark: 'A', className: 'angular' },
    { name: 'TypeScript', type: 'Application language', mark: 'TS', className: 'typescript' },
    { name: 'SCSS', type: 'Styling system', mark: '#', className: 'scss' },
    { name: 'REST API', type: 'Data communication', mark: '↔', className: 'api' },
  ];
}
