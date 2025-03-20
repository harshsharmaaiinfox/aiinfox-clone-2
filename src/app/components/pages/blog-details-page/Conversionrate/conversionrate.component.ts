import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/_services/email.service';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";
@Component({
  selector: 'app-conversionrate',
  templateUrl: './conversionrate.component.html',
  styleUrls: ['./conversionrate.component.scss', './../blog-details-page.component.scss']
})
export class ConversionrateComponent {
  commentForm: any;
  constructor(private emailService: EmailService,private metaService: Meta,
    private titleService: Title) { }
  ngOnInit() {
    this.metaService.updateTag({ property: 'og:title', content: 'Find the best web design company to elevate your brand.'});
    this.metaService.updateTag({property:'description',content:'Discover the best web design company to boost your brand awareness and create an impactful online presence with our website design services in Mohali.'})
    this.metaService.updateTag({ name:'keywords',content:'Web design company'});
    this.titleService.setTitle("Find the best web design company to elevate your brand.");
    this.initCommentForm();
  }

  

  initCommentForm() {
    this.commentForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      website: new FormControl(''),
      message : new FormControl(''),
      isSave: new FormControl(false)
    })
  }

  onSend() {
    // this.emailService.sendEmail(this.commentForm.value).then(
    //   (response) => {
    //     console.log('Email sent successfully', response.text);
    //     this.commentForm.reset();
    //     //   alert('Email sent successfully');
    //   },
    //   (error) => {
    //     console.log('Failed to send email', error);
    //     //   alert('Failed to send email');
    //   }
    // );

    this.emailService.sendEmail(this.commentForm.value).subscribe(
      (response) => {
          console.log('Email sent successfully', response);
          this.commentForm.reset();
          //   alert('Email sent successfully');
      },
      (error) => {
          console.log('Failed to send email', error);
          //   alert('Failed to send email');
      });

  }
}
