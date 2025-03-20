import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
    selector: 'app-homeone-blog',
    templateUrl: './homeone-blog.component.html',
    styleUrls: ['./homeone-blog.component.scss']
})
export class HomeoneBlogComponent implements OnInit {
    blogData: any;

    constructor(private globalService: GlobalService, private router: Router ) { }

    ngOnInit(): void {
        this.getBlogDetails()
    }

    getBlogDetails() {
        this.globalService.getBlogData().subscribe((data: any) => {
            if(data) {
                this.blogData = data;
                this.blogData.forEach((element: any) => {
                    const route = { path: element.path, component: element.component, data: element }
                    this.router.config.splice(this.router.config.length - 1, 0, route);
                });
                this.router.resetConfig(this.router.config);
            }
        });
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Our Blog",
            title: 'Latest Valuable Insights',
            paragraphText: ''
        }
    ]
    singleBlogPost: blogPostContent[] = [
        {
            postImg: 'assets/img/blog/img1.jpg',
            postTitle: 'Discover How Top AI Development Companies in Mohali are Revolutionizing the Future of Industries?',
            postLink: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries',
            postDate: 'June 28, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Manjeet',
            alt: 'AI Development Companies in Mohali'
        },
        {
            postImg: 'assets/img/blog/img2.jpg',
            postTitle: 'Elevate Your Brand with A Top-Notch Web Design Company',
            postLink: 'elevate-your-brand-with-a-top-notch-web-design-company',
            postDate: 'July 10, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Rushali',
            alt: 'Web Design Company in Mohali'
        },
        {
            postImg: 'assets/img/blog/img3.jpg',
            postTitle: 'How to Choose the Best Mobile App Development Company in Mohali?',
            postLink: 'how-to-choose-the-best-mobile-app-development-company-in-mohali',
            postDate: 'July 24, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'Karan',
            alt: 'Mobile App Development Company in Mohali'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class blogPostContent {
    postImg : string;
    postLink : string;
    postTitle : string;
    postDate : string;
    postAuthorImage : string;
    postAuthorName : string;
    alt: string;
}