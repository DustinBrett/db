import { Component,} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navItems = [
    { 'name': 'home', 'icon': 'fa-home' },
    { 'name': 'blog', 'icon': 'fa-rss-square' },
    { 'name': 'travel', 'icon': 'fa-globe-asia' },
    { 'name': 'coding', 'icon': 'fa-code' },
    { 'name': 'contact', 'icon': 'fa-at' }
  ];
}
