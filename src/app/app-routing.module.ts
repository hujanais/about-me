import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsMlComponent } from './components/projects-ml/projects-ml.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ProjectsIotComponent } from './components/projects-iot/projects-iot.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'iot', component: ProjectsIotComponent },
  { path: 'projects-ml', component: ProjectsMlComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
