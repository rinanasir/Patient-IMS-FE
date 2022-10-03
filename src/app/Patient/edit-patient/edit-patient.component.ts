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
  name !: String;
  age !: number;
  dob !: String;
  phone !: String;
  email !: String;
  address !: String;


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
    this.patientService.getPatientById(patientId).subscribe(data => {
      this.id = data.patientId
      this.name = data.patientName
      // this.age = data.age
      // this.dob = data.dob
      // this.phone = data.phone
      // this.email = data.email
      // this.address = data.address
      // console.log(data);
    })
  }

  deletePatient(id: number) {
    alert(id);
  }

  getAllPatients() {
    this.patientList = this.patientService.getPatientList();
  }

}
