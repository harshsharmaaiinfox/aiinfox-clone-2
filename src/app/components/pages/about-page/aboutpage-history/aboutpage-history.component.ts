import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aboutpage-history',
    templateUrl: './aboutpage-history.component.html',
    styleUrls: ['./aboutpage-history.component.scss']
})
export class AboutpageHistoryComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Our History",
            title: 'History Begins in 2022',
            paragraphText: `AiInfox is dedicated to transforming organizations through cutting-edge technology, and it has grown rapidly to become a major provider of <a href=""><b>AI and Machine Learning Services<b></a>.`
        }
    ]
    historyTimeline: TimelineBlock[] = [
        {
            year: '2022',
            date: 'October 20',
            title: 'Founded',
            paragraphText: 'Our Company was founded in 2022. We established the framework for what would soon become an upward trend in the business, motivated by a desire for innovation and quality.',
            img: 'assets/img/history/img1.jpg',
            alt:'Establish'
        },
        {
            year: '2023',
            date: 'January 14',
            title: 'Local Projects',
            paragraphText: 'As we entered 2023, we focused on local projects. We focused on dedicating ourselves to understanding and meeting our communities specific needs. This period was critical in polishing our talents and establishing a strong reputation for delivering quality and dependability.',
            img: 'assets/img/history/img2.jpg',
            alt:'Local Projects'
        },
        {
            year: '2023',
            date: 'November 15',
            title: 'Significant Growth',
            paragraphText: 'By the end of 2023, our dedication to quality and expanding portfolio of successful projects had resulted in enormous growth. We grew our team, improved our capabilities, and prepared to face new challenges and opportunities.',
            img: 'assets/img/history/img3.jpg',
            alt:'Significant Growth'
        },
        {
            year: '2024',
            date: 'March 10',
            title: 'Global Expansion and AI Integration',
            paragraphText: 'In 2024, our company went global, delivering our services to a wider community. We also embraced AI, integrating new and efficient solutions into our efforts. This represented the start of a new chapter, showing our aspirations for global leadership and innovation.',
            img: 'assets/img/history/img4.jpg',
            alt:'Global Expansion and AI Integration'
        },
        {
            year: '2025',
            date: 'January 14',
            title: 'Advanced Automation and AI Evolution',
            paragraphText: 'In Aiinfox we use smart no-code automation tools like n8n, Make, and Zapier to optimize and improve efficiency from the workflows. In 2025, we will integrate n8n for Agentic systems, shifting to advanced autonomous processes. We also leverage the latest DeepSeek model to deliver state-of-the-art reasoning as well as AI-driven automation. ',
            img: 'assets/img/about-2025-main.png',
            alt:'Global Expansion and AI Integration'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class TimelineBlock {
    year : string;
    date : string;
    title : string;
    paragraphText : string;
    img : string;
    alt:string;
}