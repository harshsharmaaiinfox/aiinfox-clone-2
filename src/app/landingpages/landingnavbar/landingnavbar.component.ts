import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-landingnavbar',
  templateUrl: './landingnavbar.component.html',
  styleUrl: './landingnavbar.component.scss'
})
export class LandingnavbarComponent implements OnInit {
  constructor(
    private globalService: GlobalService
  ){

  }
  ngOnInit() {
   
  }

  menuClicked(menu: any){
    // this.onClickServices.emit(true);
    console.log("menu..",menu)
    this.globalService.isMenuClicked = menu;
  }

}
