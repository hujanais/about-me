import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FizzBuzzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
