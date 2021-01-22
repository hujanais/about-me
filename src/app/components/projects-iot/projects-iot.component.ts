import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DryerPiComponent } from '../dryer-pi/dryer-pi.component';
import { Esp8622Component } from '../esp8622/esp8622.component';
import { SensehatComponent } from '../sensehat/sensehat.component';

@Component({
  selector: 'app-projects-iot',
  templateUrl: './projects-iot.component.html',
  styleUrls: ['./projects-iot.component.scss']
})
export class ProjectsIotComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(title: string) {
    if (title === 'DRYER-PI') {
      this.matDialog.open(DryerPiComponent);
    } else if (title === 'SENSE-HAT') {
      this.matDialog.open(SensehatComponent);
    } else if (title === 'ESP8622') {
      this.matDialog.open(Esp8622Component);
    }
  }

}
