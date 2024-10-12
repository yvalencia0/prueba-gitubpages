import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'basesAngular';
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value
    //value == 1 ? this.counter += 1: this.counter -=1;
    //this.counter += 1;
  }

  resetCounter():void{
    this.counter = 10
  }
/*
  decreaseBy():void{
    this.counter -=1;
  }
  */
}
