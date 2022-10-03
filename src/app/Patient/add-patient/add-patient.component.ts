import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/Service/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  handleOnSubmit(patient: any) {
    this.patientService.addNewPatient(patient).subscribe(data => {
      if (data == null) alert("Patient Infromation Saved Successfully.");
      window.location.reload();
    },
      error => console.log("error", error)

    )
    // console.log(patient);
  }

}
