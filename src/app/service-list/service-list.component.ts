import { Component } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent {
  services = [
    {
      id: '01',
      title: 'Mobile App Development',
      icon: '/assets/img/mobility-app.png',
      description: 'We specialize in mobile app development. Understanding and analyzing the needs and requirements of clients and providing the best solution for mobile app development. We have expertise in cross-platform app development and provide the best services.'
    },
    {
      id: '02',
      title: 'Web Design',
      icon: '/assets/img/design.png',
      description: 'At AIInfox, we design visually appealing, responsive websites that offer a seamless user experience across all devices, reflecting your brand and engaging your audience.'
    },
    {
      id: '03',
      title: 'Web Development',
      icon: '/assets/img/coding.png',
      description: 'We have a team of proficient web developers who offer customized, fully integrated, and scalable web development solutions within the specified time frame. The main highlights of our services are website security, smart application architecture, and cost savings.'
    },
    {
      id: '04',
      title: 'Digital Marketing & SEO',
      icon: '/assets/img/social-media.png',
      description: 'Our digital marketing team is known to establish the online presence of new businesses and navigate the competitive digital landscape. Our expert digital marketers are exceptionally skilled in driving the right audience to achieve desirable results.'
    }
  ];
}
