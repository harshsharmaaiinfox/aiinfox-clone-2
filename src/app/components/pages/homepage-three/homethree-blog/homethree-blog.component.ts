import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-blog',
    templateUrl: './homethree-blog.component.html',
    styleUrls: ['./homethree-blog.component.scss']
})
export class HomethreeBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Latest Valuable Insights',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleBlogPost: blogPostContent[] = [
        {
            postImg: 'assets/img/blog/img4.jpg',
            postTitle: 'Six Ways to Make Smarter Decisions',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'assets/img/blog/img5.jpg',
            postTitle: 'The Challenges to Tackle Before You Start With AI',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'assets/img/blog/img6.jpg',
            postTitle: 'Why Organisations Want an Analytics Platform',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner'
        }
    ]

}
class sectionTitleContent {
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
}