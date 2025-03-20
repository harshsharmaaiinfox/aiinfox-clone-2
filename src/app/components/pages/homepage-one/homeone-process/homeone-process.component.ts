import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-process',
    templateUrl: './homeone-process.component.html',
    styleUrls: ['./homeone-process.component.scss']
})
export class HomeoneProcessComponent implements OnInit, AfterViewInit {

    @Input('section') section: string = '';

    constructor(
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        if(this.section === 'aboutus') {
            this.sectionTitle = [
                {
                    subTitle: "Fly High with AiInfox",
                    title: 'Why AiInfox',
                    paragraphText: 'AiInfox is becoming stronger day by day and every team member who is thorough and professional is contributing towards the company success.'
                }
            ];

            this.singleProcessBox = [
                {
                    img: 'assets/img/process/whyus1.jpg',
                    title: ' We Know Your Business ',
                    paragraphText: 'We save your business from unnecessary problems and challenges that can arise!  ',
                    number: '1',
                    alt: 'AI Business'
                },
                {
                    img: 'assets/img/process/whyus2.jpg',
                    title: 'Promote Your Business ',
                    paragraphText: 'As we know everything about your business, we will combine our tools and technologies to make you reach newer heights.  ',
                    number: '2',
                    alt: 'Promote Business with AI'
                },
                {
                    img: 'assets/img/process/whyus3.jpg',
                    title: 'Worth a Smart Investment  ',
                    paragraphText: 'Hiring AiInfox for economical and convenient ways to achieve your targets by employing transparent and affordable services.  ',
                    number: '3',
                    alt: 'Investment with AI'
                },
                {
                    img: 'assets/img/process/whyus4.jpg',
                    title: 'One-Stop Destination for All-In-One Marketing Team ',
                    paragraphText: 'AiInfox provides a complete package of all-in-one marketing services combined with extensive experience and expertise.  ',
                    number: '4',
                    alt: 'AI Marketing Team'
                }
            ]
        }

        if(this.section === 'home') {

            this.sectionTitle = [
                {
                    subTitle: "Our Process",
                    title: 'Our Course of Action ',
                    paragraphText: 'AiInfox specializes in developing customized AI solutions to cater to the specific needs of clients. '
                }
            ];

            this.singleProcessBox = [
                {
                    img: 'assets/img/process/process1.jpg',
                    title: 'Data Collection',
                    paragraphText: 'At AiInfox, our process begins with a thorough and strategic data collection using advanced techniques. ',
                    number: '1',
                    alt: 'Data Collection'
                },
                {
                    img: 'assets/img/process/process2.jpg',
                    title: 'Data Analysis',
                    paragraphText: 'Our experts analyze patterns and correlations, extracting valuable insights to inform decision-making. ',
                    number: '2',
                    alt: 'Data Analysis'
                },
                {
                    img: 'assets/img/process/process3.jpg',
                    title: 'Create Modules',
                    paragraphText: 'Utilizing insights from data analysis, we create precision-crafted modular components, the foundation of our AI applications.',
                    number: '3',
                    alt: 'Create Modules'
                },
                {
                    img: 'assets/img/process/process4.jpg',
                    title: 'Integrating Modules ',
                    paragraphText: 'We seamlessly integrate our developed modules into an intelligent system, ensuring synergy and efficiency that perfectly aligns with your business objectives.  ',
                    number: '4',
                    alt: 'Integrating Modules'
                },
                {
                    img: 'assets/img/process/process5.jpg',
                    title: 'Monitoring and Testing',
                    paragraphText: 'We continuously monitor the performance of the module to ensure it works as expected. Additionally, we proactively address any issues or optimize the module to maintain peak performance.',
                    number: '5',
                    alt: 'Monitoring and Testing'
                },
                {
                    img: 'assets/img/process/process6.jpg',
                    title: 'Final Deployment',
                    paragraphText: 'After completing all work, we deliver the final product to the client, ensuring it meets all specified requirements and performs optimally.',
                    number: '6',
                    alt: 'Final Deployment'
                }
            ]
        }

        this.cdRef.detectChanges();
    }

    sectionTitle: sectionTitleContent[] = [];
    singleProcessBox: processBoxContent[] = [];

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class processBoxContent {
    img : string;
    title : string;
    paragraphText : string;
    number : string;
    alt: string;
}