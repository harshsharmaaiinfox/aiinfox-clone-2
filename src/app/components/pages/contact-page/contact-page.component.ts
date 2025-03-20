import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { EmailService } from 'src/app/_services/email.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
    contactForm: any;
    constructor(private emailService: EmailService, private metaService: Meta,
        private titleService: Title) { }



    ngOnInit() {
        this.initContactForm();
        this.metaService.updateTag({ property: 'og:title', content: 'Contact Us for Custom AI Solutions'});

        this.metaService.updateTag({ name: 'keywords', content: 'Custom AI solution, Contact us' });
        this.metaService.updateTag({ name: 'description', content: 'Explore the ideal AI solutions to encourage innovative ideas. To discuss your project requirements with India top AI specialists, get in touch with us.' },
        )
        this.titleService.setTitle("Contact Us for Custom AI Solutions");
    }

    initContactForm() {
        this.contactForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl(''),
            phoneNumber: new FormControl(''),
            message: new FormControl('')
        })

    }

    onSend() {
        // this.emailService.sendEmail(this.contactForm.value).then(
        //     (response) => {
        //         console.log('Email sent successfully', response.text);
        //         this.contactForm.reset();
        //         //   alert('Email sent successfully');
        //     },
        //     (error) => {
        //         console.log('Failed to send email', error);
        //         //   alert('Failed to send email');
        //     }
        // );

        this.emailService.sendEmail(this.contactForm.value).subscribe(
            (response) => {
                console.log('Email sent successfully', response);
                this.contactForm.reset();
                //   alert('Email sent successfully');
            },
            (error) => {
                console.log('Failed to send email', error);
                //   alert('Failed to send email');
            }
        );
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Contact Us'
        }
    ]
    contactInfoBox1: InfoBox1[] = [
        {
            icon: 'bx bx-map',
            title: 'US',
            location: '5206, Craftsman ST, Johns Creek Georgia, 30097'
        }
    ]

    contactInfoBox4: InfoBox4[] = [
        {
            icon: 'bx bx-map',
            title: 'Canada',
            location: '85, Nortonville drive, Scarborough, Ontario M1T 2G9'
        }
    ]

    contactInfoBox5: InfoBox5[] = [
        {
            icon: 'bx bx-map',
            title: 'India',
            location: 'D-234 , Phase 8B, Industrial Area, Sector 74, SAS Nagar, Punjab 160055'
        }
    ]
    contactInfoBox2: InfoBox2[] = [
        {
            icon: 'bx bx-phone-call',
            title: 'Contact',
            number: '+91-7888513249',
            email: 'info@aiinfox.com'
        }
    ]
    // contactInfoBox3: InfoBox3[] = [
    //     {
    //         icon: 'bx bx-time-five',
    //         title: 'Hours of Operation',
    //         text1: 'Monday - Friday: 09:00 - 20:00',
    //         text2: 'Sunday & Saturday: 10:30 - 22:00'
    //     }
    // ]

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Get In Touch",
            title: 'Ready to Get Started?',
            paragraphText: 'Your email address will not be published. Required fields are marked *'
        }
    ]
    contactImage: Image[] = [
        {
            img: 'assets/img/contact.png',
            alt: 'Contact Us'
        }
    ]

}
class pageTitle {
    title: string;
}
class InfoBox1 {
    icon: string;
    title: string;
    location: string;
}
class InfoBox2 {
    icon: string;
    title: string;
    number: string;
    email: string;
}
// class InfoBox3 {
//     icon : string;
//     title : string;
//     text1 : string;
//     text2 : string;
// }
class InfoBox4 {
    icon: string;
    title: string;
    location: string;
}
class InfoBox5 {
    icon: string;
    title: string;
    location: string;
}
class sectionTitleContent {
    subTitle: string;
    title: string;
    paragraphText: string;
}
class Image {
    img: string;
    alt: string;
}