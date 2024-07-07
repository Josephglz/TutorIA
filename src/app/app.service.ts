import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  studentData: Student = {} as Student;

  constructor() { }

  get StudentData(): Student {
    return this.studentData;
  }

  set StudentData(studentData: Student) {
    this.studentData = studentData;
  }


  getStudentData(): void {
    if (localStorage.getItem('studentData')) {
      this.studentData = JSON.parse(localStorage.getItem('studentData')!);
    } else {
      this.studentData = {} as Student;
    }
  }

  storeStudentData(studentData: Student): void {
    this.studentData = studentData;
    localStorage.setItem('studentData', JSON.stringify(studentData));
  }
}
