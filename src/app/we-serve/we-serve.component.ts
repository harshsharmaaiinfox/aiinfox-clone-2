import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-we-serve',
  templateUrl: './we-serve.component.html',
  styleUrls: ['./we-serve.component.scss'],
})
export class WeServeComponent implements AfterViewInit {
  icons = [
    { name: 'Open AI', img: 'assets/img/gpt.png' },
    { name: 'Vertax AI', img: 'assets/img/vertexai.png' },
    { name: 'Gemma', img: 'assets/img/gemma.png' },
    { name: 'Midjourney', img: 'assets/img/midjourney.png' },
    { name: 'Gemini Pro', img: 'assets/img/gemini-brand.png' },
    { name: 'Claude', img: 'assets/img/claude.png' },
    { name: 'N8N', img: 'assets/img/n8n.png' },
  ];

  currentIndex: number = 0;
  totalSlides: number = 0;
  slidesPerView: number = 2; // Default to 2 slides per view

  ngAfterViewInit() {
    this.updateSlidesPerView();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSlidesPerView();
  }

  updateSlidesPerView() {
    const screenWidth = window.innerWidth;
    this.slidesPerView = screenWidth <= 768 ? 1 : 2; // 1 slide if <= 768px, else 2 slides
    this.calculateTotalSlides();
  }

  calculateTotalSlides() {
    this.totalSlides = Math.ceil(this.icons.length / this.slidesPerView) - 1; // Fix: prevent extra slide
  }

  goToSlide(index: number) {
    if (index < 0) return;
    if (index > this.totalSlides) return; // Prevent sliding beyond last visible slide
    this.currentIndex = index;
  }

  getTransformStyle(): string {
    const slideWidth = 100 / this.slidesPerView;
    return `translateX(-${this.currentIndex * slideWidth}%)`;
  }
}
