import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-webdevelopment',
  templateUrl: './webdevelopment.component.html',
  styleUrl: './webdevelopment.component.scss'
})
export class WebdevelopmentComponent {
  constructor(private global: GlobalService ,
    private metaService: Meta,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'Top Web Development Company in Mohali | AiInfox'});
    this.metaService.updateTag({ name:'keywords',content:'Top Web development company in Mohali, website development services in Mohali'});
    this.metaService.updateTag({ name: 'description', content: 'AiInfox, the top web development company in Mohali, offers experienced website development services in Mohali. Increase your online visibility today!' },
    )
    this.titleService.setTitle("Top Web Development Company in Mohali | AiInfox");
    
  }
}
