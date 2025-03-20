import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-services',
    templateUrl: './homeone-services.component.html',
    styleUrls: ['./homeone-services.component.scss']
})
export class HomeoneServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Our Services',
            title: 'We Offer Professional Solutions For Business',
            paragraphText: 'We are constantly working with a vision in mind to transform the power of Artificial Intelligence for an enhanced future.'
        }
    ]
    singleServicesBox: ServicesBoxContent[] = [
        {
            icon: 'assets/img/services/ai-ser.png',
            title: 'AI & Machine Learning ',
            paragraphText: 'We offer exclusive services of AI and Machine Learning services. By implementing this technology, we can create more interactive and intuitive designs resulting in improved user experience, enhanced functionality, and provide personalized experiences.',
            link: 'ai-machine-learning',
            linkText: 'Read More',
            linkIcon: 'flaticon-right',
            alt :"AI and ML Services "
           
        },
        {
            icon: 'assets/img/services/ai-brain.png',
            title: 'Generative AI  ',
            paragraphText: 'We are exclusive providers of generative AI services. Our team is highly skilled in generative AI services that greatly help create certain types of images, text, and videos. We use machine-learning models to generate outputs that impersonate human creativity.',
            link: 'generative-ai',
            linkText: 'Read More',
            linkIcon: 'flaticon-right',
            alt :"Generative AI Services",

        },
        {
            icon: 'assets/img/services/app-development.png',
            title: 'Mobile App Development ',
            paragraphText: ' We specialize in mobile app development. Understanding and analyzing the needs and requirements of clients and providing the best solution for mobile app development. We have expertise in cross-platform app development and provide the best services. ',
            link: 'mobile-app-development',
            linkText: 'Read More',
            linkIcon: 'flaticon-right',
            alt :"App Development Services in Mohali"
        },
        {
            icon: 'assets/img/services/data.png',
            title: 'Data Science ',
            paragraphText: 'Our team is efficient in data science and analyzes the data efficiently. It is a powerful tool that is greatly helpful in predicting customer behaviour, and trends and identifying new opportunities. It acts as a tool for helping businesses with product development and marketing. ',
            link: 'data-science',
            linkText: 'Read More',
            linkIcon: 'flaticon-right',
            alt :"Data Science Companies in Mohali "
        },
        {
            icon: 'assets/img/services/webdev.png',
            title: 'Web Development',
            paragraphText: 'We have a team of proficient web developers who offer customized, fully integrated, and scalable web development solutions within the specified time frame. The main highlights of our services are website security, smart application architecture, and cost savings. ',
            link: 'web-development',
            linkText: 'Read More',
            linkIcon: 'flaticon-right',
            alt :"Web Development Services in Mohali"
        },
        {
            icon: 'assets/img/services/bullhorn.png',
            title: 'Digital Marketing',
            paragraphText: 'Our digital marketing team is known to establish the online presence of new businesses and navigate the competitive digital landscape. Our expert digital marketers are exceptionally skilled in driving the right audience to achieve desirable results. ',
            link: 'digital-marketing-seo',
            linkText: 'Read More',
            linkIcon: 'flaticon-right',
            alt :"Digital Marketing Services "
        }
    ]
    loadMoreBtn: loadMore[] = [
        {
            link: 'services',
            linkText: 'Load More',
            linkIcon: 'flaticon-refresh'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class ServicesBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
    linkIcon : string;
    alt: string;
}
class loadMore {
    link : string;
    linkText : string;
    linkIcon : string;
}