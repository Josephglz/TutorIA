import { Injectable } from '@angular/core';
import { Student } from '../interfaces/Student';

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

  isLogged(): boolean {
    return !!localStorage.getItem('studentData');
  }

  getShortFullName(): string {
    if (!this.studentData.firstName || !this.studentData.lastName) {
      this.getStudentData();
    }
    return this.studentData.firstName.split(' ')[0] + ' ' + this.studentData.lastName.split(' ')[0];
  }

  getShortName(): string {
    if (!this.studentData.firstName) {
      this.getStudentData();
    }
    return this.studentData.firstName.split(' ')[0].charAt(0) + this.studentData.lastName.split(' ')[0].charAt(0);
  }
}
