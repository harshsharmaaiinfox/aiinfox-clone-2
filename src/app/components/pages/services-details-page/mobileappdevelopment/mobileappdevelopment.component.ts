import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-mobileappdevelopment',
  templateUrl: './mobileappdevelopment.component.html',
  styleUrl: './mobileappdevelopment.component.scss'
})
export class MobileappdevelopmentComponent {
  constructor(private global: GlobalService ,
    private metaService: Meta,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'Top Mobile App Development Company in Mohali | AiInfox'});
    this.metaService.updateTag({ name:'keywords',content:'App development company in Mohali, app development services in Mohali'});
    this.metaService.updateTag({ name: 'description', content: 'Empower your business with AiInfox, the top app development company in Mohali. Explore expert app development services in Mohali for mobile app solutions.' },
    )
    this.titleService.setTitle("Top Mobile App Development Company in Mohali | AiInfox");
    
  }
}
