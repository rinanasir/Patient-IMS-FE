import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Service/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  patientList !: Observable<Patient[]>

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientList = this.patientService.getPatientList();
  }

}
