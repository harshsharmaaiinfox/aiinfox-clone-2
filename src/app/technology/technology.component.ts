// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-technology',
//   templateUrl: './technology.component.html',
//   styleUrls: ['./technology.component.scss'],
// })
// export class TechnologyComponent {
//   techStack = [
//     {
//       title: 'Language',
//       frontIcon: '/assets/img/language.png',
//       backIcons: [
//         { src: '/assets/img/java.png', alt: 'Java', tooltip:"Java" },
//         { src: '/assets/img/python.png', alt: 'Python', tooltip:"Python" },
//         { src: '/assets/img/c++.png', alt: 'C++' , tooltip:"C++" },
//       ],
//     },
//     {
//       title: 'Mobility',
//       frontIcon: '/assets/img/mobility-app.png',
//       backIcons: [
//         { src: '/assets/img/andriod.png', alt: 'Android' , tooltip:"Android"},
//         { src: '/assets/img/ios.png', alt: 'iOS', tooltip:"IOS" },
//       ],
//     },
//     {
//       title: 'Framework',
//       frontIcon: '/assets/img/framework90.png',
//       backIcons: [
//         { src: '/assets/img/react.png', alt: 'React' , tooltip:"React"},
//         { src: '/assets/img/angular.png', alt: 'Angular', tooltip:"Angular" },
//       ],
//     },
//     {
//       title: 'Data',
//       frontIcon: '/assets/img/data90.png',
//       backIcons: [{ src: '/assets/img/apache.png', alt: 'Apache', tooltip:"Apache" }],
//     },
//     {
//       title: 'Cloud',
//       frontIcon: '/assets/img/server.png',
//       backIcons: [
//         { src: '/assets/img/aws.png', alt: 'AWS' , tooltip:"AWS"},
//         { src: '/assets/img/google-cloud.png', alt: 'Google Cloud', tooltip:"Google Cloud" },
//         { src: '/assets/img/azure.png', alt: 'Azure' ,tooltip:"Azure" },
//       ],
//     },
//   ];
// }

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit, OnDestroy {
  techStack = [
    { backIcons: [{ src: '/assets/img/java-icon.png', alt: 'Java', tooltip: 'Java' }, { src: '/assets/img/python-icon.png', alt: 'Python', tooltip: 'Python' }, { src: '/assets/img/c++-icon.png', alt: 'C++', tooltip: 'C++' }] },
    { backIcons: [{ src: '/assets/img/android-icon.png', alt: 'Android', tooltip: 'Android' }, { src: '/assets/img/ios-icon.png', alt: 'iOS', tooltip: 'iOS' }] },
    { backIcons: [{ src: '/assets/img/react-icon.png', alt: 'React', tooltip: 'React' }, { src: '/assets/img/angular-icon.png', alt: 'Angular', tooltip: 'Angular' }] },
    { backIcons: [{ src: '/assets/img/apache-main.png', alt: 'Apache', tooltip: 'Apache' }] },
    { backIcons: [{ src: '/assets/img/aws-icon.png', alt: 'AWS', tooltip: 'AWS' }, { src: '/assets/img/cloud-icon.png', alt: 'Google Cloud', tooltip: 'Google Cloud' }, { src: '/assets/img/azure-icon.png', alt: 'Azure', tooltip: 'Azure' }] },
  ];

  allIcons: { src: string; alt: string; tooltip: string }[] = [];
  currentSlideOffset: number = 0;
  private slideInterval: any;
  private slideSpeed: number = 3000; // 3 seconds per slide
  visibleItems: number = 5; // Number of visible items

  ngOnInit(): void {
    // Manually flatten the array
    this.techStack.forEach(stack => {
      stack.backIcons.forEach(icon => {
        this.allIcons.push(icon);
      });
    });

    this.startSlider();
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  startSlider(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.slideSpeed);
  }

  stopSlider(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide(): void {
    const totalItems = this.allIcons.length;
    const slideWidthPercentage = 100 / this.visibleItems; // Each item takes 20% of the slider width

    this.currentSlideOffset -= slideWidthPercentage;

    // Reset to the first slide after the last slide is fully visible
    if (Math.abs(this.currentSlideOffset) >= totalItems * slideWidthPercentage - 100) {
      this.currentSlideOffset = 0;
    }
  }

  getLastVisibleIndex(): number {
    const slideWidthPercentage = 100 / this.visibleItems; // Calculate width per slide
    const currentIndex = Math.abs(this.currentSlideOffset / slideWidthPercentage);
    return currentIndex + this.visibleItems - 1; // Last visible item
  }
}
