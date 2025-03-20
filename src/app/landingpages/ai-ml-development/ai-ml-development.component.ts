import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/_services/email.service';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
    selector: 'app-ai-ml-development',
    templateUrl: './ai-ml-development.component.html',
    styleUrl: './ai-ml-development.component.scss'
})
export class AiMlDevelopmentComponent implements OnInit {
    @ViewChild('contactFormSection') contactFormSection: ElementRef;
    @ViewChild('Services') Services: ElementRef;
    @ViewChild('Engagement') Engagement: ElementRef;
    @ViewChild('Why') Why: ElementRef;
    @ViewChild('About') About: ElementRef;
    @ViewChild('Free') Free: ElementRef;

    
    contactForm: any;
    constructor(
        private emailService: EmailService,
        private globalService: GlobalService
    ) { }
   
    ngOnInit() {
        this.initContactForm();
        this.globalService._isMenuClicked.subscribe((val: any) => {
            switch (val) {
                case 'services':
                    this.Services.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'Engagement':
                    this.Engagement.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'Why':
                    this.Why.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'About':
                    // this.About.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'Free':
                    this.Free.nativeElement.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'GetStarted':
                    this.contactFormSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
                default:
                    console.log('Unknown value:', val);
            }
        });
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

    clickTrialButton() {
        this.scrollToContactForm();
    }

    onClickDetails() {
        this.scrollToContactForm();

    }

    onClickNextStep() {
        this.scrollToContactForm();
    }


    scrollToContactForm() {
        this.contactFormSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    aboutImage = [
        {
            img: 'assets/img/about/img1.png'
        }
    ];

    aboutContent = [
        {
            subTitle: 'Our Values ',
            title: 'Transform Ideas into Intelligent Algorithms. Get Custom AI/ML Solutions & Expert Developers',
            paragraphText1: 'We stick to our core values and work accordingly to deliver the best results.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Book A 30 Minute Consultation',
            defaultBtnLink: 'about-us'
        }

    ];

    featuresList = [
        {
            icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRMMTIuNSAxOS41TDIzIDkiIHN0cm9rZT0iIzNDQzA2NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxNC41IiByPSIxNCIgc3Ryb2tlPSIjM0NDMDY1Ii8+Cjwvc3ZnPgo=',
            title: 'Hire top 1% AI/ML development talent ',
            subTitle: 'On the market'
        },
        {
            icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRMMTIuNSAxOS41TDIzIDkiIHN0cm9rZT0iIzNDQzA2NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxNC41IiByPSIxNCIgc3Ryb2tlPSIjM0NDMDY1Ii8+Cjwvc3ZnPgo=',
            title: '12+ years experience, 500+ professionals ',
            subTitle: 'Team members'
        },
        {
            icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRMMTIuNSAxOS41TDIzIDkiIHN0cm9rZT0iIzNDQzA2NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxNC41IiByPSIxNCIgc3Ryb2tlPSIjM0NDMDY1Ii8+Cjwvc3ZnPgo=',
            title: 'Save up to 50% on development cost ',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRMMTIuNSAxOS41TDIzIDkiIHN0cm9rZT0iIzNDQzA2NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxNC41IiByPSIxNCIgc3Ryb2tlPSIjM0NDMDY1Ii8+Cjwvc3ZnPgo=',
            title: 'One week free trial ',
            subTitle: 'Senior scientist'
        },
    ];

    // This is the data for the services section
    sectionTitle = [
        {
            subTitle: 'Our Services',
            title: 'We Offer Professional Solutions For Business',
            paragraphText: 'We are constantly working with a vision in mind to transform the power of Artificial Intelligence for an enhanced future.'
        }
    ]
    singleServicesBox = [
        {
            icon: 'assets/img/services/icon1.png',
            title: 'AI & Machine Learning ',
            paragraphText: 'Harness the power of GenAI with our expertise in GPT-4, DALL-E, and AI and ML services, for creating exceptional apps, images, and content.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon2.png',
            title: 'Generative AI  ',
            paragraphText: 'We are exclusive providers of generative AI services. Our team is highly skilled in generative AI services that greatly help create certain types of images, text, and videos. We use machine-learning models to generate outputs that impersonate human creativity.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },

        {
            icon: 'assets/img/services/icon4.png',
            title: 'Web Design',
            paragraphText: 'At AiInfox, our dedicated team of expert web designers are committed to bringing your vision to reality with originality and accuracy. As the leading provider of web design services, Allow us to transform your ideas into incredible digital experiences.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon5.png',
            title: 'Web Development',
            paragraphText: 'We have a team of proficient web developers, making us a top web development company, offering customized, fully integrated, and scalable web development solutions within the specified time frame. The main highlights of our services are website security, smart application architecture, and cost savings.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon6.png',
            title: 'Digital Marketing',
            paragraphText: 'Our digital marketing team,  recognized as the best digital marketing company, is known to establish the online presence of new businesses and navigate the competitive digital landscape. Our expert digital marketers are exceptionally skilled in driving the right audience to achieve desirable results.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon3.png',
            title: 'Mobile App Development ',
            paragraphText: 'We are a leading app development company specializing in mobile app development. Understanding and analyzing the needs and requirements of clients and providing the best solution for mobile app development. We have expertise in cross-platform app development and provide the best services.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon4.png',
            title: 'Data Science ',
            paragraphText: 'Our team is efficient in data science, a core strength shared by leading data science companies. We analyze data with efficiently , transforming it into a powerful tool It is a powerful tool that is greatly helpful in predicting customer behaviour, and trends and identifying new opportunities. It acts as a tool for helping businesses with product development and marketing.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },

        // {
        //     icon: 'assets/img/services/icon3.png',
        //     title: 'Mobile App Development ',
        //     paragraphText: ' We specialize in mobile app development. Understanding and analyzing the needs and requirements of clients and providing the best solution for mobile app development. We have expertise in cross-platform app development and provide the best services. ',
        //     link: 'services-details',
        //     linkText: 'Read More',
        //     linkIcon: 'flaticon-right'
        // },
        // {
        //     icon: 'assets/img/services/icon4.png',
        //     title: 'Data Science ',
        //     paragraphText: 'Our team is efficient in data science and analyzes the data efficiently. It is a powerful tool that is greatly helpful in predicting customer behaviour, and trends and identifying new opportunities. It acts as a tool for helping businesses with product development and marketing. ',
        //     link: 'services-details',
        //     linkText: 'Read More',
        //     linkIcon: 'flaticon-right'
        // },


    ]
    loadMoreBtn = [
        {
            link: 'services',
            linkText: 'Load More',
            linkIcon: 'flaticon-refresh'
        }
    ];

    accordionItems = {};

    singleCaseStudyItem = [
        {
            subTitle: 'Our Projects',
            title: "They're very willing to assemble the team that we ask for if we have certain preferences.",
            paragraphText1: 'James Burke',
            paragraphText2: 'Managing Partner, Consensus Interactive',
            link: 'case-studies-details',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/user6.jpg'
        },
        {
            subTitle: 'Our Projects',
            title: '"The workflow between our team and theirs was excellent."',
            paragraphText1: 'James Burke',
            paragraphText2: 'Managing Partner, Consensus Interactive',
            link: 'case-studies-details',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/user3.jpg'
        }
    ];

    sectionTitleContact = [
        {
            subTitle: "Get In Touch",
            title: 'What Can We Help You With?',
            paragraphText: 'Get Custom Solutions, Recommendations, Resumes, or, Estimates. Confidentiality & Same Day Response Guaranteed!'
        }
    ]
    contactImage = [
        {
            img: 'assets/img/contact.png'
        }
    ];


    sectionTitleHistory = [
        {
            subTitle: "What happens next?",
            title: 'Order an IT consultation',
            paragraphText: 'Fill out the form to receive a consultation and explore how we can assist you and your business.'
        }
    ]
    historyTimeline = [
        {
            year: '2021',
            date: 'October 20',
            title: 'Founded',
            paragraphText: 'An expert contacts you shortly after having analyzed your business requirements.',
            img: 'assets/img/history/img1.jpg'
        },
        {
            year: '2022',
            date: 'January 14',
            title: 'Global Success',
            paragraphText: 'If required, we sign an NDA to ensure the highest privacy level.',
            img: 'assets/img/history/img2.jpg'
        },
        {
            year: '2023',
            date: 'March 25',
            title: 'Founded Data Center',
            paragraphText: 'A Pre-Sales Manager submits a comprehensive project proposal. It may include estimates, timelines, lists of CVs, etc., for a particular situation.',
            img: 'assets/img/history/img3.jpg'
        },
        {
            year: '2024',
            date: 'December 10',
            title: 'International Award',
            paragraphText: 'Now, we can launch the project.',
            img: 'assets/img/history/img4.jpg'
        }
    ]


    accordionItemsClick(number: any) {
        if (this.accordionItems[number]) {
            this.accordionItems = {};
        } else {
            this.accordionItems = {};
            this.accordionItems[number] = true;
        }
    }

}
