import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

    constructor(
        private global: GlobalService,
        private metaService : Meta,
        private titleService : Title
    ) { }

    ngOnInit(): void {
        this.metaService.updateTag({ property: 'og:title', content: 'AiInfox: Innovative Solutions for Your Business Needs'});
        this.titleService.setTitle("AiInfox: Innovative Solutions for Your Business Needs");
        this.metaService.updateTag({ name:'keywords',content:'AI and ML, digital marketing and SEO, generative AI, and web design'});
        this.metaService.updateTag({ name: 'description', content: 'Explore AiInfox offerings in AI and ML, digital marketing and SEO, generative AI, and web design. Comprehensive solutions to elevate your business'},
        )
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Services'
        }
    ]
    singleSolutionsBox: solutionsBoxContent[] = [
        {
            icon: 'flaticon-rocket',
            title: 'Ai and Machine Learning',
            paragraphText: 'AiInfox helps you primarily empower your business. With the recent developments in AI and machine learning technologies, a major impact can be seen on society and various industries...',
            link: 'ai-machine-learning',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-laptop',
            title: 'Generative Ai',
            paragraphText: 'The newest technology generative AI has entered the world and is responsible for making huge changes. Enterprises want to embrace generative AI services but as it is a new technology... ',
            link: 'generative-ai',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-money',
            title: 'Data Science',
            paragraphText: 'AiInfox is known for specialising in data science. We are known to provide the best data science services which is a great combination of business analytics, machine learning...',
            link: 'data-science',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-segmentation',
            title: 'Mobile App Development',
            paragraphText: 'Our highly accomplished developers are known to have experience and knowledge of the latest technologies as a result they make sure your app is built as per industry standards...',
            link: 'mobile-app-development',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-analytics',
            title: 'Web Development',
            paragraphText: 'In today’s digitalized age, owning a website has become essential. It acts as a doorway to reach both local and global audiences offering widespread opportunities to promote...',
            link: 'web-development',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-settings',
            title: 'Web Design',
            paragraphText: 'We professional web designers at AiInfox are passionate about creating designs that speak your mind and make your thoughts turn into reality Every business is different and has different requirements...',
            link: 'web-design',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-settings',
            title: 'Digital Marketing and SEO',
            paragraphText: 'With our expert SEO services, you can elevate your online visibility. We have a team of thorough professionals who are experts in employing industry-best practices...',
            link: 'digital-marketing-seo',
            linkText: 'View Details'
        }
    ]

}
class pageTitle {
    title : string;
}
class solutionsBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
}