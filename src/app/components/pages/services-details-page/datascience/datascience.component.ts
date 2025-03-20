import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrl: './datascience.component.scss'
})
export class DatascienceComponent {
  constructor(private global: GlobalService ,
    private metaService: Meta,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'Top Data Science Companies in Mohali | AiInfox Analytics'});
    this.metaService.updateTag({ name:'keywords',content:'Data science companies in Mohali'});
    this.metaService.updateTag({ name: 'description', content: 'Explore AiInfox for company data analysis. Leading among data science companies in Mohali, we develop the value of your data.' },
    )
    this.titleService.setTitle("Top Data Science Companies in Mohali | AiInfox Analytics");
    
  }
}
