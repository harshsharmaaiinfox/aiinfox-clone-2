import { afterRender, Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { GlobalService } from './_services/global.service';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    title: any;
    location: any;
    routerSubscription: any;
    isLandingPage: boolean = false;

    constructor(
        private router: Router,
        private globalService: GlobalService
    ) {
        // afterRender(()=>{
        //     // runs on client / browser
        //     console.log("Constructor: Output is generated in both the server and the browser.");
        // })
        this.getBlogDetails();
    }

    ngOnInit(){
        this.recallJsFuntions();
    }

    getBlogDetails() {
        this.globalService.getBlogData().subscribe((data: any) => {
            if(data) {
                data.forEach((element: any) => {
                    const route = { path: element.path, component: element.component, data: element }
                    this.router.config.splice(this.router.config.length - 1, 0, route);
                });
                this.router.resetConfig(this.router.config);
            }
        });
    }

    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            $.getScript('../assets/js/main.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if(this.location.includes('/landing-')) {
                this.isLandingPage = true;
            } else {
                this.isLandingPage = false;
            }
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}