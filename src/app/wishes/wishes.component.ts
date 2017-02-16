import { Component, OnInit } from '@angular/core';
import { WishesArray } from '../models/wishes.model';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})

export class WishesComponent implements OnInit {
private wishesArray: WishesArray[] = [
    { 
      name: 'Arjun',
      msg: 'Here is the msg!...',
      src: 'assets/images/arjun.jpg'
   },
  { name: 'Aarish',
msg: 'Here is the msg!...',
      src: 'assets/images/aarish.jpg'
 },
  { name: 'Abhishek',
msg: 'Here is the msg!...',
      src: 'assets/images/arjun.jpg'
 },
  { name: 'Preeja',
msg: 'Here is the msg!...',
      src: 'assets/images/preeja.jpg'
 },
  { name: 'Pooja',
msg: 'Here is the msg!...',
      src: 'assets/images/arjun.jpg'
 },
  { name: 'Puja',
msg: 'Here is the msg!...',
      src: 'assets/images/puja.jpg'
 },
   { name: 'Raghu',
msg: 'Here is the msg!...',
      src: 'assets/images/raghu.jpg'
 },
  { name: 'Selva',
msg: 'Friends like you are rare treasure, like a pot of gold or precious gem. Its your day to shine and sparkle! Have a great birthday!...',
      src: 'assets/images/selva.jpg'
 },
    { name: 'Venky',
  msg: 'Happy birthday.. chechi. Wishing you a peaceful and wonderful time ahead. Godbless you with all the happiness.',
      src: 'assets/images/venky.jpg'
 },
  { name: 'Vishnu',
msg: 'Here is the msg!...',
      src: 'assets/images/vishnu.jpg'
     }
];
  constructor() { }

  ngOnInit() {
  }

}
