import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-generativeai',
  templateUrl: './generativeai.component.html',
  styleUrl: './generativeai.component.scss'
})
export class GenerativeaiComponent implements OnInit {
  constructor(private global: GlobalService ,
    private metaService: Meta,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'Powered Your Innovation Journey with AWS Generative AI Services'});
    this.metaService.updateTag({ name:'keywords',content:'Data science companies in Mohali'});
    this.metaService.updateTag({ name: 'description', content: 'Discover how our AWS-based generative AI services may help your business reach new heights. Explore cutting-edge commercial applications now.' },
    )
    this.titleService.setTitle("Powered Your Innovation Journey with AWS Generative AI Services");
    
  }
}
