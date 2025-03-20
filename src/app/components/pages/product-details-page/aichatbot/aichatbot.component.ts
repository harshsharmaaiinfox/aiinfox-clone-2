import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aichatbot',
  standalone: true,
  imports: [],
  templateUrl: './aichatbot.component.html',
  styleUrl: './aichatbot.component.scss'
})
export class AichatbotComponent implements OnInit {
  @ViewChild('classroomChatbotSection', { static: true }) classroomChatbotSection!: ElementRef;
  @ViewChild('interviewChatbotSection', { static: true }) interviewChatbotSection!: ElementRef;
  constructor(private route: Router, private router: ActivatedRoute, private metaService: Meta,
    private titleService: Title) { }


  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      const section = params['section'];
      if (section === 'classroom-chatbot') {
        this.scrollToSection(this.classroomChatbotSection);
      } else if (section === 'interview-chatbot') {
        this.scrollToSection(this.interviewChatbotSection);
      }
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Enhance customer interaction with AiInfox AI Chatbot Software.'});
    this.metaService.updateTag({ name: 'keywords', content: 'AI Chatbot, ChatBot software' });
    this.metaService.updateTag({ name: 'description', content: 'Discover AiInfox powerful AI chatbot software, which provides seamless customer engagement and an improved user experience. Explore our solutions now!' },
    )
    this.titleService.setTitle("Enhance customer interaction with AiInfox AI Chatbot Software.");
  }


  scrollToSection(section: ElementRef): void {
    if (section) {
      section.nativeElement.scrollIntoView({ behavior: 'smooth' });

    }
  }


  onClickBook() {
    this.route.navigate(['/contact-us'])

  }






}
