import { Component } from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: true,
  templateUrl: './preview.html',
  styleUrl: './preview.scss',
})
export class Preview {
  readonly previewImage = 'https://moeinzandii.ir/matchfinder.png';
  readonly repositoryUrl = 'https://git.hallboard.ir/Moparj85/match-finder-a2';
}
