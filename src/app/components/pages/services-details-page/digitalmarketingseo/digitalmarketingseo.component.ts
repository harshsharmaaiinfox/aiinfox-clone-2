import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-digitalmarketingseo',
  templateUrl: './digitalmarketingseo.component.html',
  styleUrl: './digitalmarketingseo.component.scss'
})
export class DigitalmarketingseoComponent {
  constructor(private global: GlobalService ,
    private metaService: Meta,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'Best Digital Marketing Company in Mohali - AiInfox'});
    this.metaService.updateTag({ name:'keywords',content:'Best Digital Marketing Company in Mohali - AiInfox'});
    this.metaService.updateTag({ name: 'description', content: 'Explore AiInfox, the best digital marketing company in Mohali, offering top-notch SEO services, social media marketing services, and comprehensive digital marketing services.' },
    )
    this.titleService.setTitle("Best Digital Marketing Company in Mohali - AiInfox");
    
  }
}
