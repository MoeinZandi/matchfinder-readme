import { Component } from '@angular/core';

import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Features } from './features/features';
import { Technologies } from './technologies/technologies';
import { Preview } from './preview/preview';
import { Architecture } from './architecture/architecture';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, About, Features, Technologies, Preview, Architecture, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
