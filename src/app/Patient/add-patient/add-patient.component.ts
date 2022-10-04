import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/Service/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  fileToUpload !: File;
  url: String = "";

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


  // uploadImage(event: any) {
  //   let fileType = event.target.files[0].type;
  //   if (event.target.files[0]) {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     }
  //   }
  //   console.log(this.url);
  // }


}
