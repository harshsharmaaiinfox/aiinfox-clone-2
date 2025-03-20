import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-case-studies',
    templateUrl: './homeone-case-studies.component.html',
    styleUrls: ['./homeone-case-studies.component.scss']
})
export class HomeoneCaseStudiesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleCaseStudyItem: singleCaseStudyItemContent[] = [
        {
            subTitle: 'Our Projects',
            title: 'HRMS',
            paragraphText1: 'It is a suite of software developed by us that helps organizations manage internal human resource functions. ',
            paragraphText2: 'It is loaded with tons of features that help human resource personnel easily and quickly automate time-consuming and tedious processes and activities.',
            link: 'ai-hrms',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/case-study/img1.jpg',
            alt: 'Human Resource Management System',
            id:'human-resource management system'
        },
        {
            subTitle: 'Our Projects',
            title: 'HMS',
            paragraphText1: 'The Hospital Management system is a complete integrated suite of software specially designed to carry out all medical services, inventory tracking, supply chain optimization and staff management in a smooth way.',
            paragraphText2: '',
            link: 'ai-hms',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/case-study/img2.jpg',
            alt: 'Hospital Management System',
            id: 'hospital-management-system'
        },
        {
            subTitle: 'Our Projects',
            title: 'Classroom Chatbot',
            paragraphText1: 'A classroom AI chatbot is a smart tool made for schools. It works on computers or phones and helps students learn better. It fits into digital learning tools or works alone, giving students interactive help and support as they learn.',
            paragraphText2: '',
            link: 'ai-chatbot',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/courses/class-mainbanner.png',
            alt: 'Classroom Chatbot',
            id: 'classroom-chatbot'
        },
        {
            subTitle: 'Our Projects',
            title: 'Interview Chatbot',
            paragraphText1: 'Interview Chatbot is an AI-powered tool that assists in the recruitment process by analyzing resumes and generating custom interview questions based on a candidates specific skills and experiences.',
            paragraphText2: '',
            link: 'ai-chatbot',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/courses/interview-main.png',
            alt: 'Interview Chatbot',
            id:'interview-chatbot'
        }
    ]

}
class singleCaseStudyItemContent {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    link : string;
    linkText : string;
    linkIcon : string;
    img : string;
    alt : string;
    id:string;
}