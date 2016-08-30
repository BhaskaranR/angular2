import { Component, Input } from '@angular/core';

@Component({
    selector: 'quick-card',
    templateUrl: 'app/shared/components/quick-card/quick-card.component.html',
    styleUrls: ['app/shared/components/quick-card/quick-card.component.css']
})

export class QuickCardComponent {
  @Input() name: string;
  @Input() img: string;
  @Input() selected: string;
  //@Output() deleteRequest = new EventEmitter<Hero>();

  constructor() {

  }
}
