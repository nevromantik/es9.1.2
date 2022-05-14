import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounterService } from './counter.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'es9.1.2';

  userValue: number = 0;
   constructor(private nums: CounterService){}

  form(f: NgForm){
    this.userValue = f.value.val;
    
  }

  
  add(num: number){
   this.nums.add(num);

  }

  subtrac(num: number){
    this.nums.subtrac(num)
  }

}
