import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  @Input() counterShowed$!: any;
  @Input() counterShowed2$!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
