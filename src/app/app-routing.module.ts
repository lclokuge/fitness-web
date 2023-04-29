import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddeditActivitiesComponent } from './components/addedit-activities/addedit-activities.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddeditActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
