import { Component, OnInit, Input } from '@angular/core';
import { WishesArray } from '../models/wishes.model';

@Component({
  selector: 'app-greeting-card',
  templateUrl: './greeting-card.component.html',
  styleUrls: ['./greeting-card.component.css']
})
export class GreetingCardComponent implements OnInit {
  @Input()
  wish: WishesArray;
  constructor() { }

  ngOnInit() {
    console.log("jvjgj" + this.wish);
  }

}
