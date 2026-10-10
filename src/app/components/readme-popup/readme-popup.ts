import { Component, output } from '@angular/core';

@Component({
  selector: 'app-readme-popup',
  standalone: true,
  templateUrl: './readme-popup.html',
  styleUrl: './readme-popup.scss',
})
export class ReadmePopup {
  readonly closed = output<void>();

  close(): void {
    this.closed.emit();
  }
}
