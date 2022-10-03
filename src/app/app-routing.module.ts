import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPatientComponent } from './Patient/add-patient/add-patient.component';
import { EditPatientComponent } from './Patient/edit-patient/edit-patient.component';
import { ListPatientComponent } from './Patient/list-patient/list-patient.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "patients", component: ListPatientComponent },
  { path: "addPatient", component: AddPatientComponent },
  { path: "editPatient", component: EditPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
