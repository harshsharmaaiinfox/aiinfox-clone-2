import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aihrms',
  standalone: true,
  imports: [],
  templateUrl: './aihrms.component.html',
  styleUrl: './aihrms.component.scss'
})
export class AihrmsComponent implements OnInit {
  constructor(private global: GlobalService, private route: Router, private metaService: Meta,
    private titleService: Title) { }

  ngOnInit(): void {
    this.metaService.updateTag({ property: 'og:title', content: 'AiInfox: AI HRMS and In-depth HR Management Systems.'});
    this.metaService.updateTag({ name: 'keywords', content: 'AI HRMS, Human Resource Management system, HR and payroll system' });
    this.metaService.updateTag({ name: 'description', content: 'Explore AiInfox advanced AI HRMS and inclusive human resource management system, with an integrated HR and payroll system.' },
    )
    this.titleService.setTitle("AiInfox: AI HRMS and In-depth HR Management Systems.");

  }

  onClickBook() {
    this.route.navigate(['/contact-us'])

  }
}
