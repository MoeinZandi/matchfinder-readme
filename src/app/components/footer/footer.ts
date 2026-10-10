import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly repositoryUrl = 'https://git.hallboard.ir/Moparj85/match-finder-a2';
}
