import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects-desktop',
  templateUrl: './projects-desktop.component.html',
  styleUrls: ['./projects-desktop.component.scss']
})
export class ProjectsDesktopComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(title: string) {
    // if (title === 'DRYER-PI') {
    //   this.matDialog.open(DryerPiComponent);
    // } else if (title === 'SENSE-HAT') {
    //   this.matDialog.open(SensehatComponent);
    // } else if (title === 'ESP8622') {
    //   this.matDialog.open(Esp8622Component);
    // }
  }
}
