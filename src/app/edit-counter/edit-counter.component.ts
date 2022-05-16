import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

  userValue: number = 0;
  constructor(private nums: CounterService){}
  ngOnInit(): void {
  }

  form(f: NgForm){
    this.userValue = f.value.val;
    
  }

  added!:number;
  subtracted!: number;
  add(num: number){
   this.nums.add(num);
   this.added = this.nums.added;
  this.showCounter$.next(this.added);

  }

  subtrac(num: number){
    this.nums.subtrac(num);
    this.subtracted = this.nums.subtracted;
    this.showCounter2$.next(this.subtracted);

  }
  
  private showCounter$ = new Subject<number>() 
  counterShowed$ = this.showCounter$.asObservable();
  
    
  private showCounter2$ = new Subject<number>() 
  counterShowed2$ = this.showCounter2$.asObservable();

  
}
