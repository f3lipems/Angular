import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value = 0;

  @Output() newValue = new EventEmitter();

  @ViewChild('inputField') inputFieldValue: ElementRef;

  increment() {
    console.log(this.inputFieldValue);
    this.value++;
    this.newValue.emit({nv: this.value});
    
    //Input 2
    this.inputFieldValue.nativeElement.value++;
  }

  decrement() {
    console.log(this.inputFieldValue);
    this.value--;
    this.newValue.emit({nv: this.value});

    //Input 2
    this.inputFieldValue.nativeElement.value--;
  }

  constructor() { }

  ngOnInit() {
  }

}
