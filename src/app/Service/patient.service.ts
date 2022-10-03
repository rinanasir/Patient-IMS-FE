import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly apiUrl = "http://localhost:8080/home/";

  constructor(private http: HttpClient) {

  }

  addNewPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}addPatient`, patient);
  }

  getPatientList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}patients`);
  }

  getPatientById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}patients/${id}`);
  }

  updatePatientById(patient: Patient): Observable<Patient> {
    return this.http.put<any>(`${this.apiUrl}editPatient`, patient);
  }

  deletePatientById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}deletePatient/${id}`);
  }
}
