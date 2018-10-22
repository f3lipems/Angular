import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  favorite: boolean = false;
  icon: string = 'star-empty';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    switch (this.icon) {
      case 'star-empty':
        this.icon = 'star'
        break;
    
      case 'star':
        this.icon = 'glyphicon-ok'
        break;
      
      case 'glyphicon-ok':
      this.icon = 'glyphicon-asterisk'
      break;
    
      default:
      this.icon = 'star-empty'
        break;
    }
  }
}
