import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  courses: string[] = [];

  langs: string[] = ['JS', 'AngularJS', 'NodeJS'];

  flag: boolean = true;
  flag2: boolean = false;

  flagChange() {
    this.flag = !this.flag;
  }

  constructor() { }

  ngOnInit() {
  }

}
