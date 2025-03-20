import { Component, EventEmitter, Input, OnInit, Output, output, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-project-start',
    templateUrl: './project-start.component.html',
    styleUrls: ['./project-start.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class ProjectStartComponent implements OnInit {

    @Input('section') section: string = '';
    @Output('clickTrialButton') clickTrialButton = new EventEmitter<any>()

    location: any;
    circleShape1Class: any;
    vectorShape3Class: any;
    vectorShape9Class: any;
    vectorShape10Class: any;
    sectionClass: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/'){
                    this.circleShape1Class = 'circle-shape1 d-block';
                    this.vectorShape3Class = 'vector-shape3 d-none';
                    this.vectorShape9Class = 'vector-shape9 d-none';
                    this.vectorShape10Class = 'vector-shape10 d-none';
                } else if (this.location == '/home-two'){
                    this.circleShape1Class = 'circle-shape1 d-none';
                    this.vectorShape3Class = 'vector-shape3 d-block';
                    this.vectorShape9Class = 'vector-shape9 d-none';
                    this.vectorShape10Class = 'vector-shape10 d-none';
                } else if (this.location == '/home-four' || this.location == '/data-science' || this.location == '/mobile-app-development' || this.location == '/web-development' || this.location == '/web-design' || this.location == '/digital-marketing-seo' || this.location == '/services' || this.location == '/generative-ai' || this.location == '/about-us' || this.location == '/ai-machine-learning' || this.location == '/faq' || this.location ==='/landing-ai-ml-development'
                ){
                    this.circleShape1Class = 'circle-shape1 d-none';
                    this.vectorShape3Class = 'vector-shape3 d-none';
                    this.vectorShape9Class = 'vector-shape9 d-block';
                    this.vectorShape10Class = 'vector-shape10 d-block';
                    this.sectionClass = 'bg-color';
                }
            }
        });
    }
    
    ngOnInit(): void {
    }

    onClickTrial(){
        this.clickTrialButton.emit(true);
    }

    projectStartImage: Image[] = [
        {
            img: 'assets/img/project-start1.png',
            alt:'AI Services'
        }
    ]
    projectStartContent: Content[] = [
        {
            title: 'READY TO KICK OFF OUR COLLABORATION?',
            paragraphText: 'Drop us a line to discuss how Aiinfox developers can set your product up for success with a human-centered design.',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact-us'
        }
    ]

    CoreValuesContent: Content[] = [
        {
            title: 'Our Distinctive Core Values Setting Us Apart',
            paragraphText: 'For a business to be successful, the foundation needs to be strong and firm. For a strong foundation, the foremost important cornerstone is business ethics. We at AiInfox, stay true to our work and religiously follow a well-defined policy that shows complete transparency between us and our prestigious client leaving any room for dishonesty. This makes us the most trusted partner!',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact-us'
        }
    
    ]

    AiMachineValuesContent: Content[] = [
        {
            title: 'Start Quickly with a Generative AI client Briefing by AiInfox',
            paragraphText: 'AiInfox offers consulting services that offer powerful and innovative AI solutions with our high-end software developed by our skilled team.We are here to provide solutions to every need of yours.',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact-us'
        }
    
    ]

    digitalmarketContent: Content[] = [
        {
            title: 'Get in touch for a detailed personalised consultation! ',
            paragraphText: 'Let us venture into the realm of digital success together.',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact-us'
        }

    ]
    webdesignContent: Content[] = [
        {
            title: 'Lets Start With AiInfox ',
            paragraphText: `We, professional web designers, strive hard to make AiInfox a leader in <a href='' style="color:white"> web design services in Mohali </a> and prove our mettle in the field of artificial intelligence.`,
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact-us'
        }
    
    ]
    webdevelopContent: Content[] = [
        {
            title: 'Lets Start With AiInfox ',
            paragraphText: `Our skilled web developers are committed to establishing AiInfox as a leader in <a href='' style="color:white"> web development services in Mohali </a> demonstrating our prowess in integrating artificial intelligence.`,
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact-us'
        }
    
    ]
    mobileappContent: Content[] = [
        {
            title: 'Get ready to see your ideas turn into reality in the form of apps! ',
            paragraphText: 'We have become one of the best mobile app development agency India and are best known for providing exceptional services and support at the same time.',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact-us'
        }
    
    ]

    takeTheFirstStepContent: Content[] = [
        {
            title: 'Take the First Step',
            paragraphText: 'Begin your no-commitment, 1-week trial today.',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'CONSULT FOR FREE-TRIAL',
            defaultBtnLink: 'contact-us'
        }
    
    ]
}
class Image {
    img : string;
    alt:string;
}
class Content {
    title : string;
    paragraphText: string;
    defaultBtnIcon : string;
    defaultBtnText : string;
    defaultBtnLink : string;
}