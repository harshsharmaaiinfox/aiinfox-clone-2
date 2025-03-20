import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-homepage-one',
  templateUrl: './homepage-one.component.html',
  styleUrls: ['./homepage-one.component.scss']
})
export class HomepageOneComponent implements OnInit {

  constructor(private global: GlobalService,private metaService: Meta,
    private titleService: Title) { }

  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'Top AI development company in Mohali and Chandigarh: AiInfox'});
    this.metaService.updateTag({ name: 'keywords', content: 'AI Development Company in Mohali, AI services in Mohali, AI and machine learning services, Top AI companies in Mohali, future of AI in Mohali' });
    this.metaService.updateTag({ name: 'description', content: 'AiInfox is among the top AI development companies in Mohali that offer cost-effective services including Web and App development, digital marketing and more.' },
    )
    this.titleService.setTitle("Top AI development company in Mohali and Chandigarh: AiInfox");

  }


}