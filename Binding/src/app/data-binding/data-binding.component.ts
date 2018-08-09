import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  url = 'http://visionar.io';
  urlImagem = 'http://lorempixel.com/400/200/';
  inputValue = '';
  inputValue2 = '';
  isMouseOver = false;

  contValue = 7;

  nameCourse = 'AngularJS';

  getValor() {
    return 1;
  }

  buttonClicked() {
    alert('Botão clicado!');
  }

  onKeyUp(evento) {
    this.inputValue = evento.target.value;
  }

  saveValue(value) {
    this.inputValue2 = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onNewValue(v) {
    console.log(v.nv);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
