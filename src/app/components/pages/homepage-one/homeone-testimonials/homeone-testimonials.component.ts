import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-testimonials',
    templateUrl: './homeone-testimonials.component.html',
    styleUrls: ['./homeone-testimonials.component.scss']
})
export class HomeoneTestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Testimonials",
            title: 'What Our Clients Are Saying?',
            paragraphText: 'Our clients say AiInfox innovative AI solutions have revolutionized their businesses, driving efficiency and growth.'
        }
    ]
    singleTestimonialsItem: TestimonialsItemContent[] = [
        {
            paragraphText: 'It was great to work with AiInfox. He completed all the tasks on time and was very responsive.',
            clientImg: 'assets/img/testimonials/img1.jpg',
            clientName: 'Aleksandre Deriugini',
            alt:'Aleksandre Deriugini'
            //clientDesignation: 'CEO at EnvyTheme'
        },
        {
            paragraphText: 'AiInfox transformed our online presence with their cutting-edge digital strategies and seamless web development.',
            clientImg: 'assets/img/testimonials/david.png',
            clientName: 'Oliver',
             alt:'Oliver'
            //clientDesignation: 'CEO at Envato'
        },
        {
            paragraphText: 'AiInfox developed an impressive chatbot for us that significantly enhanced our customer interaction.',
            clientImg: 'assets/img/testimonials/sarah.png',
            clientName: 'Sarah Johns',
             alt:'Sarah Johns'
            //clientDesignation: 'CEO at ThemeForest'
        }
    ]
    testimonialsBtn: Btn[] = [
        {
            link: "https://www.google.com/maps/place/AiInfox/@30.7091302,76.6857827,17z/data=!4m8!3m7!1s0x390fef0b0308c373:0x278e99c2f11d8157!8m2!3d30.7091256!4d76.6883576!9m1!1b1!16s%2Fg%2F11ld3c6v20?entry=ttu",
            icon: 'flaticon-view',
            text: 'Check Out All Reviews'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class TestimonialsItemContent {
    paragraphText : string;
    clientImg : string;
    clientName : string;
    alt:string;
    //clientDesignation : string;
}
class Btn {
    link : string;
    icon : string;
    text : string;
}