import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Service/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patientList !: Observable<Patient[]>

  id !: number;
  pName !: String;
  pGender !: String;
  pAge !: number;
  pDob !: String;
  phoneNo !: String;
  pEmail !: String;
  pAddress !: String;


  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  handleOnSubmit(patient: any) {
    // this.bookService.updateBookById(book).subscribe(data => {
    //   if (data === null) alert("Book Updated Successfully");
    //   window.location.reload();
    // },
    //   error => console.log('error', error)
    // )
    console.log(patient);
  }

  getPatient(patientId: number) {
    this.patientService.getPatientById(patientId).subscribe((data) => {
      this.id = data.patientId
      this.pName = data.patientName
      this.pGender = data.gender
      this.pAge = data.age
      this.pDob = data.dob
      this.phoneNo = data.phone
      this.pEmail = data.email
      this.pAddress = data.address
      // console.log(this.dob);
    })
  }

  deletePatient(id: number) {
    alert(id);
  }

  getAllPatients() {
    this.patientList = this.patientService.getPatientList();
  }

}
