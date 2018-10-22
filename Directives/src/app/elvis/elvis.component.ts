import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.css']
})
export class ElvisComponent implements OnInit {

  element: any = {
    desc: 'Descrição do elemento',
    resp: null,
    name: "Felipe"
  }

  constructor() { }

  ngOnInit() {
  }

}
