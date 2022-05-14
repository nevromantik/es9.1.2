import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  private counter = 0;

  
  get counterVal(){
    return this.counter;
  }

  
  
  add(num: number){
    this.counter = this.counter + num;
    console.log(this.counter)
  }
  
  subtrac(num: number){
    if(num > 0){
    this.counter = this.counter - num;
    console.log(this.counter)}
    else{
      console.log("inserire un numero maggiore di zero")
    }
  }
}
