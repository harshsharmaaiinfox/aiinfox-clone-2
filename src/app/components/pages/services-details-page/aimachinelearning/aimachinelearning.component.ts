import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aimachinelearning',
  templateUrl: './aimachinelearning.component.html',
  styleUrl: './aimachinelearning.component.scss'
})
export class AimachinelearningComponent {

  constructor(private global: GlobalService ,
    private metaService: Meta,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'Top Provider of AI and Machine Learning Services: AiInfox'});
    this.metaService.updateTag({ name:'keywords',content:'Machine learning development company, AI and ML services, AI and Machine Learning'});
    this.metaService.updateTag({ name: 'description', content: 'AiInfox, a leading AI and machine learning development company, provides high-quality AI and ML services, utilizing AI power to make the best decisions.' },
    )
    this.titleService.setTitle("Top Provider of AI and Machine Learning Services: AiInfox");
    
  }
}
