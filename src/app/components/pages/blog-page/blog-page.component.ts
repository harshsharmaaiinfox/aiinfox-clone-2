import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/_services/global.service';
import { BlogDetailsPageComponent } from '../blog-details-page/blog-details-page.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

    blogData: any;

    constructor(
        private router: Router,
        private globalService: GlobalService,
        private metaService: Meta,
        private titleService: Title
    ) { }

    ngOnInit(): void {
        this.getBlogDetails();
        this.metaService.updateTag({ property: 'og:title', content: 'AiInfox Blog: Insights on AI Innovations'});

        this.metaService.updateTag({ name:'keywords',content:'AiInfox Blog'});
        this.metaService.updateTag({ name: 'description', content: 'Explore the AiInfox Blog for the latest trends and insights in artificial intelligence. Stay updated with expert articles and industry news.' },
        )
        this.titleService.setTitle("AiInfox Blog: Insights on AI Innovations");
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
    
    pageTitleArea: pageTitle[] = [
        {
            title: 'Blog'
        }
    ]
    singleBlogPost: blogPostContent[] = [
        {
            postImg: 'assets/img/blog/img4.jpg',
            postTitle: 'The Data Surrounding Higher Education',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'assets/img/blog/img5.jpg',
            postTitle: 'Conversion Rate the Sales Funnel Optimization',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'assets/img/blog/img6.jpg',
            postTitle: 'Business Data is changing the world’s Energy',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner'
        },
        {
            postImg: 'assets/img/blog/img7.jpg',
            postTitle: 'The data-driven approach to understanding',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'assets/img/blog/img8.jpg',
            postTitle: 'Finding the blocks of neighboring fields',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'assets/img/blog/img9.jpg',
            postTitle: 'Data into Your Enterprise to Drive Insights',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner'
        },
        {
            postImg: 'assets/img/blog/img10.jpg',
            postTitle: 'Introduction to Recommendation Engines',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'assets/img/blog/img11.jpg',
            postTitle: '5 Things You Should Know About Data',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'assets/img/blog/img12.jpg',
            postTitle: 'Which Language to Choose for Deep Learning?',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner'
        }
    ]

}
class pageTitle {
    title : string;
}
class blogPostContent {
    postImg : string;
    postLink : string;
    postTitle : string;
    postDate : string;
    postAuthorImage : string;
    postAuthorName : string;
}