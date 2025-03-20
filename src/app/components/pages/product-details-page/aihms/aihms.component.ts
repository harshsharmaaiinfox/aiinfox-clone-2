import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aihms',
  standalone: true,
  imports: [],
  templateUrl: './aihms.component.html',
  styleUrl: './aihms.component.scss'
})
export class AihmsComponent {
  constructor(private global: GlobalService, private route: Router, private metaService: Meta,
    private titleService: Title) { }

  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'AiInfox: Advanced AI HMS Software for Hospitals'});
    this.metaService.updateTag({ name: 'keywords', content: 'AiInfox: Advanced AI HMS Software for Hospitals' });
    this.metaService.updateTag({ name: 'description', content: 'Explore AiInfox advanced AI HMS software, designed for an effective hospital management system. Optimize your healthcare operations with ease.' },
    )
    this.titleService.setTitle("AiInfox: Advanced AI HMS Software for Hospitals");

  }  
  
  onClickBook(){
    this.route.navigate(['/contact-us'])

  }
}
