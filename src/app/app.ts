import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Features } from './components/features/features';
import { Technologies } from './components/technologies/technologies';
import { Preview } from './components/preview/preview';
import { Architecture } from './components/architecture/architecture';
import { Footer } from './components/footer/footer';
import { ReadmePopup } from './components/readme-popup/readme-popup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Features,
    Technologies,
    Preview,
    Architecture,
    Footer,
    ReadmePopup,
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  showReadmePopup = true;

  closeReadmePopup(): void {
    this.showReadmePopup = false;
  }
}
