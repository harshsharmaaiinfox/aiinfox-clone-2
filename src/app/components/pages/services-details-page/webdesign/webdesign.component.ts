import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrl: './webdesign.component.scss'
})
export class WebdesignComponent {
  constructor(private global: GlobalService ,
    private metaService: Meta,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'Craft Your Vision: Customized Web Design Services.'});
    this.metaService.updateTag({ name:'keywords',content:'Best web design services in Mohali, Best Web design company in Mohali'});
    this.metaService.updateTag({ name: 'description', content: 'Enhance your brand with AiInfox providing the best web design services in Mohali. Our experts provide planning and creative designs to ensure your online success.' },
    )
    this.titleService.setTitle("Craft Your Vision: Customized Web Design Services.");
    
  }
}
