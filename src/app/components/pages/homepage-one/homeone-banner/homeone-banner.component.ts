import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerContent: Content[] = [
        {
          title: 'WHERE AI & INNOVATION COLLIDE',
          paragraphText: `AiInfox the best <a href="/discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries" style="color:#fff; text-decoration: underline;" class="tag-color">AI Development Company</a> offers top AI Solutions for individuals and businesses as per our experience on AI services and development. Our experienced AI developers develop customized solutions like Chatbots, HRMS, HMS, and many more to meet your business demands. We aimed to lead both digitally and perceptible results for your organization. `,
          defaultBtnIcon: 'flaticon-structure',
          defaultBtnText: 'About Us',
          defaultBtnLink: 'about-us',
          videoBtnIcon: 'flaticon-google-play',
          videoBtnText: 'Watch Video',
          videoBtnLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o'
        }
      ];

}
class Content {
    title : string;
    paragraphText : string;
    defaultBtnIcon : string;
    defaultBtnText: string;
    defaultBtnLink : string;
    videoBtnIcon : string;
    videoBtnText: string;
    videoBtnLink : string;
}