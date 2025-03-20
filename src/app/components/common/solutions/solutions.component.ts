// import { Component, OnInit } from '@angular/core';

// @Component({
//     selector: 'app-solutions',
//     templateUrl: './solutions.component.html',
//     styleUrls: ['./solutions.component.scss']
// })
// export class SolutionsComponent implements OnInit {

//     constructor() { }

//     ngOnInit(): void {
//     }

//     sectionTitle: SectionTitleContent[] = [
//         {
//             subTitle: 'Our Expertise',
//             title: 'AI Services',
//             paragraphText: 'With AiInfox AI Services, implement artificial intelligence quickly in your products & services including predictive analytics, natural language processing, data analysis, technology solutions, content creation and many more.'
//         }
//     ];

//     services: SolutionsBoxContent[] = [
//         {
//             title: 'Generative AI',
//             description: 'We provide advanced generative AI services to create images, text, and videos using machine learning models.',
//             features: ['Creative Automation', 'Content Generation', 'AI-driven Insights'],
//             image: 'assets/img/creative.png'
//         },
//         {
//             title: 'AI and Machine Learning',
//             description: 'Enhancing user experience through interactive AI and machine learning technologies.',
//             features: ['Predictive Analysis', 'Data Optimization', 'Personalized AI'],
//             image: 'assets/img/intelligence.png'
//         },
//         {
//             title: 'Data Science',
//             description: 'Using data science to analyze trends, predict customer behavior, and identify new opportunities.',
//             features: ['Big Data Processing', 'Statistical Modeling', 'Business Intelligence'],
//             image: 'assets/img/machine.png'
//         },
//         {
//             title: 'AIOps',
//             description: 'Revolutionizing IT operations with intelligent automation and predictive analytics.',
//             features: ['IT Operations Automation', 'AI-driven Monitoring', 'Enhanced System Reliability'],
//             image: 'assets/img/ai-icon.png'
//         },
//         {
//             title: 'AI Security',
//             description: 'Providing AI-powered security solutions to detect threats and enhance cybersecurity.',
//             features: ['Threat Detection', 'Automated Risk Analysis', 'Malware Prevention'],
//             image: 'assets/img/ai-security.png'
//         },
//         {
//             title: 'AI Design',
//             description: 'Creating stunning visuals, intuitive user interfaces, and innovative product concepts with AI.',
//             features: ['AI-driven UI/UX', 'Automated Design Assistance', 'Creative AI Tools'],
//             image: 'assets/img/ai-design.png'
//         }
//     ];
// }

// class SectionTitleContent {
//     subTitle: string;
//     title: string;
//     paragraphText: string;
// }

// class SolutionsBoxContent {
//     title: string;
//     description: string;
//     features: string[];
//     image: string;
// }


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-solutions',
    templateUrl: './solutions.component.html',
    styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    sectionTitle: SectionTitleContent = {
        subTitle: 'Our Expertise',
        title: 'Our Services',
        paragraphText: 'We provide expert solutions in AI, Web, Mobile, and Software development to help businesses scale efficiently with cutting-edge technologies.'
    };

    services: SolutionsBoxContent[] = [
        {
            title: 'AI Development',
            description: 'Our team specializes in AI, data analysis, and machine learning. We integrate your products with leading AI models to streamline operations and enhance customer experiences.',
            features: ['LLM', 'TensorFlow', 'Python'],
            image: 'assets/img/cat-icon.svg'
        },
        {
            title: 'Staff Augmentation',
            description: 'We provide skilled engineers or dedicated teams tailored to your project, seamlessly aligning with your goals and company culture.',
            features: ['Cultural fit', 'Top 1%', 'Instant Hire'],
            image: 'assets/img/first-icon.svg'
        },
        {
            title: 'Mobile Development',
            description: 'We specialize in developing native and cross-platform mobile applications for iOS and Android.',
            features: ['React Native', 'Flutter'],
            image: 'assets/img/front-end-icon.svg'
        },
        {
            title: 'Back-end Development',
            description: 'We are experienced in high-load and complex backend infrastructure development for mobile or web apps and enterprise services.',
            features: ['Node.js', 'Go', 'Python', 'C#'],
            image: 'assets/img/backend-icon.svg'
        },
        
        {
            title: 'Front-end Development',
            description: 'We are experienced in building modular, high-performance web applications for corporate clients and startups.',
            features: ['React', 'Angular', 'Electron', 'Next.js'],
            image: 'assets/img/mobile-icon.webp'
        },
        {
            title: 'Web Development',
            description: 'Our developers can create web solutions that are tailored to your needs, easy to manage with popular CMS, and seamlessly integrated with internal systems.',
            features: ['Contentful', 'Magento', 'WP', 'Shopify'],
            image: 'assets/img/web-icon.svg'
        }
    ];
}

class SectionTitleContent {
    subTitle: string;
    title: string;
    paragraphText: string;
}

class SolutionsBoxContent {
    title: string;
    description: string;
    features: string[];
    image: string;
}
