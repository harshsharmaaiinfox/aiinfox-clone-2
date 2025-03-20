import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/_services/email.service';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";
@Component({
  selector: 'app-businessdata',
  templateUrl: './businessdata.component.html',
  styleUrls: ['./businessdata.component.scss', './../blog-details-page.component.scss']
})
export class BusinessdataComponent {
  commentForm: any;
  constructor(private emailService: EmailService,private metaService: Meta,
    private titleService: Title) { }
  ngOnInit() {
    this.metaService.updateTag({ property: 'og:title', content: 'Choose the Best App Development Company in Mohali'});
    this.metaService.updateTag({property:'description',content:'Find out how to choose the best app development company in Mohali and make sure your mobile app project is a success with helpful tips and advice.'})
    this.metaService.updateTag({ name:'keywords',content:'App Development company in Mohali'});
    this.titleService.setTitle("Choose the Best App Development Company in Mohali");
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
