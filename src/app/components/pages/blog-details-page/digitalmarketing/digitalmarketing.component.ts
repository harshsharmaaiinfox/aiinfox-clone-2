import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.scss','./../blog-details-page.component.scss']

})
export class DigitalmarketingComponent implements OnInit{
  commentForm: any;
  constructor(private emailService: EmailService, private metaService: Meta,
    private titleService: Title) { }
  ngOnInit() {
    this.metaService.updateTag({ property: 'og:title', content: 'How to Boost Your Brand with AiInfox Digital Marketing Services in 2024?'});
    this.metaService.updateTag({property:'description',content:'Explore how to enhance your brand in 2024 using digital marketing services. We offer personalized SEO, content, and social media strategies.'})
    this.metaService.updateTag({ name:'keywords',content:'digital marketing services in Mohali'});
    this.titleService.setTitle("How to Boost Your Brand with AiInfox Digital Marketing Services in 2024?");
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
       
    //   },
    //   (error) => {
    //     console.log('Failed to send email', error);
        
    //   }
    // );

    this.emailService.sendEmail(this.commentForm.value).subscribe(
      (response) => {
          console.log('Email sent successfully', response);
          this.commentForm.reset();
          
      },
      (error) => {
          console.log('Failed to send email', error);
          
      });

  }


}
