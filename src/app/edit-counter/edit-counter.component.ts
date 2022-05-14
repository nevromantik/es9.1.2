import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {


  ngOnInit(): void {
  }

  userValue: number = 0;
   constructor(private nums: CounterService){}

  form(f: NgForm){
    this.userValue = f.value.val;
    
  }

  added!:number;
  subtracted!: number;
  add(num: number){
   this.nums.add(num);
   this.added = this.nums.added;


  }

  subtrac(num: number){
    this.nums.subtrac(num);
    this.subtracted = this.nums.subtracted;

  }

}
