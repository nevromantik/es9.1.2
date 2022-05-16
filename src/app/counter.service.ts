import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  private counter = 0;

  
  get counterVal(){
    return this.counter;
  }
  
  showCounter = this.counter;
  
  
  add(num: number){
    this.counter = this.counter + num;
    this.added = this.counter;

    console.log(this.counter)
  }
  added!: number;
  subtracted!: number;
  subtrac(num: number){
    if(num > 0){
    this.counter = this.counter - num;
    this.subtracted = this.counter
    console.log(this.counter)}
    else{
      console.log("inserire un numero maggiore di zero")
    }
  }
}
