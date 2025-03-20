import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-about',
    templateUrl: './homeone-about.component.html',
    styleUrls: ['./homeone-about.component.scss']
})
export class HomeoneAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage: Image[] = [
        {
            img: 'assets/img/about/img1.png'
        }
    ]
    aboutContent: Content[] = [
        {
            subTitle: 'Our Values ',
            title: 'We at AiInfox, are proud to have core values that reflect who we are.',
            paragraphText1: 'We stick to our core values and work accordingly to deliver the best results.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'More About Us',
            defaultBtnLink: 'about-us'
        }
    ]
    featuresList: List[] = [
        {
            icon: 'assets/img/icon1.png',
            title: 'Integrity ',
            subTitle: 'On the market'
        },
        {
            icon: 'assets/img/icon2.png',
            title: 'Innovation ',
            subTitle: 'Team members'
        },
        {
            icon: 'assets/img/icon3.png',
            title: 'Accountability ',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: 'assets/img/icon4.png',
            title: 'Diversity ',
            subTitle: 'Senior scientist'
        },
        {
            icon: 'assets/img/icon4.png',
            title: 'Compassion  ',
            subTitle: 'Senior scientist'
        },
        {
            icon: 'assets/img/icon4.png',
            title: 'Resilience  ',
            subTitle: 'Senior scientist'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    defaultBtnIcon : string;
    defaultBtnText : string;
    defaultBtnLink : string;
}
class List {
    icon : string;
    title : string;
    subTitle : string;
}