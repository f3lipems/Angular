import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = 'abc';
  person = {
    name: 'def',
    age: 20
  };

  constructor() { }

  ngOnInit() {
  }

}
