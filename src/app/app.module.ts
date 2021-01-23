import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatVideoModule } from 'mat-video';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CovidSummaryComponent } from './components/covid-summary/covid-summary.component';
import { DryerPiComponent } from './components/dryer-pi/dryer-pi.component';
import { CovidMobilityComponent } from './components/covid-mobility/covid-mobility.component';
import { FizzBuzzComponent } from './components/fizz-buzz/fizz-buzz.component';
import { ProjectsMlComponent } from './components/projects-ml/projects-ml.component';
import { CartPoleComponent } from './components/cart-pole/cart-pole.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { SensehatComponent } from './components/sensehat/sensehat.component';
import { ProjectsIotComponent } from './components/projects-iot/projects-iot.component';
import { Esp8622Component } from './components/esp8622/esp8622.component';
import { ProjectsDesktopComponent } from './components/projects-desktop/projects-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ContactComponent,
    HomeComponent,
    CovidSummaryComponent,
    DryerPiComponent,
    CovidMobilityComponent,
    FizzBuzzComponent,
    ProjectsMlComponent,
    CartPoleComponent,
    TicTacToeComponent,
    ShowcaseComponent,
    SensehatComponent,
    ProjectsIotComponent,
    Esp8622Component,
    ProjectsDesktopComponent,
  ],
  entryComponents: [
    CovidSummaryComponent,
    DryerPiComponent,
    CovidMobilityComponent,
    FizzBuzzComponent,
    CartPoleComponent,
    TicTacToeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatVideoModule,
    MatSidenavModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
