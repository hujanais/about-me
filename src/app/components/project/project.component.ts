import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CovidSummaryComponent } from '../covid-summary/covid-summary.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.matDialog.open(CovidSummaryComponent);
  }
}
