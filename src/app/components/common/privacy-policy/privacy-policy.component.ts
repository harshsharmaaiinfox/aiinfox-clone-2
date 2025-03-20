import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor() { }

  ngOnInit(): void {
  }
  
  pageTitleArea: pageTitle[] = [
      {
          title: 'Privacy Policy'
      }
  ]
}
class pageTitle {
  title : string;
}