import { Component } from '@angular/core';

@Component({
  selector: 'app-dubai-landing-page',
  templateUrl: './dubai-landing-page.component.html',
  styleUrl: './dubai-landing-page.component.scss',
})


export class DubaiLandingPageComponent {


  menuItems = [
    { id: 'consultation', label: 'Consultation' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'designing', label: 'Designing' },
    { id: 'development', label: 'Development' },
    { id: 'deployment', label: 'Deployment' },
  ];

  activeSection = 'consultation'; // Default active section

  selectSection(sectionId: string) {
    this.activeSection = sectionId;
  }

  
}
