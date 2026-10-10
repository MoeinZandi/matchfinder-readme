import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  readonly features = [
    {
      number: '01',
      icon: '↔',
      title: 'Swipe-Based Matching',
      description:
        'Discover profiles through an intuitive swipe interface designed to make browsing and expressing interest simple.',
      tags: ['Interactive UI', 'Swipe Experience'],
    },
    {
      number: '02',
      icon: '⌕',
      title: 'Smart Discovery',
      description:
        'Explore profiles through a focused discovery experience with a clean layout and easy-to-use interactions.',
      tags: ['Discovery', 'User Experience'],
    },
    {
      number: '03',
      icon: '♡',
      title: 'Like & Match',
      description:
        'Express interest in profiles and make mutual connections the center of the matching experience.',
      tags: ['Likes', 'Matching'],
    },
    {
      number: '04',
      icon: '◉',
      title: 'Profile Cards',
      description:
        'Present profile details in a clear, structured interface that makes browsing more engaging.',
      tags: ['Profiles', 'Modern UI'],
    },
    {
      number: '05',
      icon: '⚡',
      title: 'Responsive Design',
      description: 'Enjoy a consistent interface across desktop, tablet, and mobile screen sizes.',
      tags: ['Responsive', 'Mobile-Friendly'],
    },
    {
      number: '06',
      icon: '⌘',
      title: 'Component-Based Architecture',
      description:
        'Keep the frontend organized with reusable Angular components and a maintainable application structure.',
      tags: ['Angular', 'Maintainability'],
    },
  ];
}
