import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class FooterComponent implements OnInit {
  location: any;
  footerClass: any;
  isPopupVisible: boolean = false; // Controls popup visibility
  contactForm!: FormGroup; // Form group for the contact form
  showContactIcon: boolean = false; // Flag to control visibility of the contact icon

  constructor(
    private router: Router,
    location: Location,
    private formBuilder: FormBuilder // Inject FormBuilder
  ) {
    // Subscribe to router events to handle footer class changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.location = this.router.url;
        if (
          this.location == '/home-two' ||
          this.location == '/home-four' ||
          this.location == '/services-details' ||
          this.location == '/events-details' ||
          this.location == '/courses' ||
          this.location == '/courses-details'
        ) {
          this.footerClass = 'footer-area';
        } else if (this.location == '/about-us') {
          this.footerClass = 'footer-area bg-fffaf3';
        } else {
          this.footerClass = 'footer-area bg-color';
        }
      }
    });
  }

  ngOnInit(): void {
    // Initialize the contact form with validation rules
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Method to toggle popup visibility
  toggleContactForm(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  // Handle form submission
  onSend(event: Event): void {
    event.preventDefault();

    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Data:', formData);

      // Add your API call logic here to send the form data to the server
      alert('Message sent successfully!');

      // Reset the form and hide the popup
      this.contactForm.reset();
      this.isPopupVisible = false;
    } else {
      alert('Please fill in the form correctly.');
    }
  }

  // Listen to scroll events
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (window.scrollY > 900) {
      this.showContactIcon = true; // Show the contact icon
    } else {
      this.showContactIcon = false; // Hide the contact icon
    }
  }
}
