import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imput-property',
  templateUrl: './imput-property.component.html',
  styleUrls: ['./imput-property.component.css']
})
export class ImputPropertyComponent implements OnInit {

  @Input() course = '';

  constructor() { }

  ngOnInit() {
  }

}
