import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-badge',
    templateUrl: 'app/users/user-badge.component.html',
    styleUrls: ['app/users/user-badge.component.css']
})

export class UserBadgeComponent {
  @Input() name: string;
  @Input() img: string;
  @Input() selected: string;
  //@Output() deleteRequest = new EventEmitter<Hero>();

  constructor() {

  }
}
