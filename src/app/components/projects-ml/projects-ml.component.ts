import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CartPoleComponent } from '../cart-pole/cart-pole.component';
import { TicTacToeComponent } from '../tic-tac-toe/tic-tac-toe.component';

@Component({
  selector: 'app-projects-ml',
  templateUrl: './projects-ml.component.html',
  styleUrls: ['./projects-ml.component.scss']
})
export class ProjectsMlComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(title: string) {
    if (title === 'CART-POLE') {
      this.matDialog.open(CartPoleComponent);
    } else if (title === 'TIC-TAC-TOE') {
      this.matDialog.open(TicTacToeComponent);
    }
  }
}
