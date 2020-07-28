import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CovidSummaryComponent } from '../covid-summary/covid-summary.component';
import { DryerPiComponent } from '../dryer-pi/dryer-pi.component';
import { CovidMobilityComponent } from '../covid-mobility/covid-mobility.component';
import { FizzBuzzComponent } from '../fizz-buzz/fizz-buzz.component';
import { CartPoleComponent } from '../cart-pole/cart-pole.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(title: string) {
    if (title === 'COVID-NG') {
      this.matDialog.open(CovidSummaryComponent);
    } else if (title === 'COVID-MOBILITY') {
      this.matDialog.open(CovidMobilityComponent);
    } else if (title === 'DRYER-PI') {
      this.matDialog.open(DryerPiComponent);
    } else if (title === 'FIZZ-BUZZ') {
      this.matDialog.open(FizzBuzzComponent);
    } else if (title === 'CART-POLE') {
      this.matDialog.open(CartPoleComponent);
    }
  }
}
