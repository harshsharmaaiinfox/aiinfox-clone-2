import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-aboutpage-about',
    templateUrl: './aboutpage-about.component.html',
    styleUrls: ['./aboutpage-about.component.scss']
})
export class AboutpageAboutComponent implements OnInit {

    constructor(
        private metaService: Meta,
        private titleService: Title,
    ) { }

    ngOnInit(): void {
        this.metaService.updateTag({ property: 'og:title', content: 'About AiInfox: Company Overview and Mission '});
        this.metaService.updateTag({ name:'keywords',content:'about us, company overview '});
        this.metaService.updateTag({ name: 'description', content: 'Explore AiInfox About Us page for a detailed company overview and mission statement. Learn about our values and commitment to innovation.' },
        )
        this.titleService.setTitle("About AiInfox: Company Overview and Mission ");
    }

    aboutImage: Image[] = [
        {
            img: 'assets/img/about/img1.png',
            alt:'Generative AI Company'
        }
    ]
    aboutContent: Content[] = [
        {
            subTitle: 'About Us',
            title: 'Drive Digital Revolution Through Best Generative AI Company',
            paragraphText1: 'AiInfox is a dedicated team of AI developers, coders, designers, and digital marketers who are rigorously working to leave a mark in the field of Artificial Intelligence.',
            paragraphText2: 'With the rise of AI in the market, we focused exceptionally on providing artificial intelligence and machine learning, web development, generative ai services, data science services, web design services, mobile app development and digital marketing services. We came into existence in August 2023. Since then, we have been on the path of providing exceptional services to our clients with maximum satisfaction.'
        }
    ]
    featuresList: List[] = [
        {
            icon: 'assets/img/icon1.png',
            title: '10 Years',
            subTitle: 'On the market'
        },
        {
            icon: 'assets/img/icon2.png',
            title: '45+',
            subTitle: 'Team members'
        },
        {
            icon: 'assets/img/icon3.png',
            title: '100%',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: 'assets/img/icon4.png',
            title: '80%',
            subTitle: 'Senior scientist'
        }
    ]
    aboutText: Text[] = [
        {
            title: 'Our Vision',
            paragraphText: 'Our vision is to provide the best artificial intelligence services in AI machine learning, web development, mobile app development and digital marketing services and cater to every need of our client most effectively and efficiently.',
            featuresList1: 'Activate Listening',
            featuresList2: 'Brilliant minds',
            featuresList3: 'Better. Best. Wow!',
            featuresList4: 'Branding it better!',
            icon: 'flaticon-tick'
        },
        {
            title: 'Our Mission',
            paragraphText: 'To provide the best possible tailored solutions to our valuable clients across the globe ensuring satisfaction and staying ahead of the competition in the ever-changing technology field!.',
            featuresList1: 'Creating. Results.',
            featuresList2: 'Expect more',
            featuresList3: 'Good thinking',
            featuresList4: 'In real we trust',
            icon: 'flaticon-tick'
        },
        // {
        //     title: 'Who we are',
        //     paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
        //     featuresList1: 'Stay real. Always.',
        //     featuresList2: 'We have you covered',
        //     featuresList3: 'We turn heads',
        //     featuresList4: 'Your brand, promoted',
        //     icon: 'flaticon-tick'
        // }
    ]

}
class Image {
    img : string;
    alt:string
}
class Content {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
}
class List {
    icon : string;
    title : string;
    subTitle : string;
}
class Text {
    title : string;
    paragraphText : string;
    featuresList1 : string;
    featuresList2 : string;
    featuresList3 : string;
    featuresList4 : string;
    icon : string;
}