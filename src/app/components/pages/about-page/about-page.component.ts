import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    constructor(
        public global: GlobalService
    ) { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'About Us'
        }
    ]

}
class pageTitle {
    title : string;
}