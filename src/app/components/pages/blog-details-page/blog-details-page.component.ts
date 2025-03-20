import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from 'src/app/_services/email.service';

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {
    commentForm: any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private emailService: EmailService
    ) { }

    ngOnInit(): void {
        this.initCommentForm();
    }
    initCommentForm() {
        this.commentForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl(''),
            website: new FormControl(''),
            message: new FormControl(''),
            isSave: new FormControl(false)
        })
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Blog Details',
            subTitle: 'The Challenges to Tackle Before You Start With AI'
        }
    ]


    onSend() {
        // this.emailService.sendEmail(this.commentForm.value).then(
        //     (response) => {
        //         this.commentForm.reset();
        //         //   alert('Email sent successfully');
        //     },
        //     (error) => {
        //         console.log('Failed to send email', error);
        //         //   alert('Failed to send email');
        //     }
        // );

        this.emailService.sendEmail(this.commentForm.value).subscribe(
            (response) => {
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



class pageTitle {
    title: string;
    subTitle: string;
}