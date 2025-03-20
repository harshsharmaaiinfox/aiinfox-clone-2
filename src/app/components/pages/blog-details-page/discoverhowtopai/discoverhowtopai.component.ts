import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/_services/email.service';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-discoverhowtopai',
  templateUrl: './discoverhowtopai.component.html',
  styleUrls: ['./discoverhowtopai.component.scss', './../blog-details-page.component.scss']
})
export class DiscoverhowtopaiComponent implements OnInit {
  commentForm: any;
  constructor(private emailService: EmailService, private metaService: Meta,
    private titleService: Title) { }
  ngOnInit() {
    this.metaService.updateTag({ property: 'og:title', content: 'Top AI Development Companies in Mohali Revolutionizing Sector'});
    this.metaService.updateTag({property:'description',content:'Blog DescriptionExplore how leading AI development companies in Mohali are transforming various industries with innovative solutions and cutting-edge technology.'})
    this.metaService.updateTag({ name:'keywords',content:'healthcare services, AI development company'});
    this.titleService.setTitle("Top AI Development Companies in Mohali Revolutionizing Sector");
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
      }
  );

  }

}
