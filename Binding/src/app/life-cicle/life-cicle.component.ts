import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input
} from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {

  @Input() initValue: number = 10;

  constructor() { 
    this.log('constructor');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');    
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook:string) {
    console.log(hook);
  }

}
