import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter: number = 0;

  increment(){
    // alert("Hi.... this is from child component");
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
