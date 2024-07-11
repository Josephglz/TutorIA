import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Student } from '../../interfaces/Student';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {
  studentData: Student = {} as Student;
  studentDataFormControls: FormGroup = {} as FormGroup;

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.createStudentDataForm();
  }

  createStudentDataForm(): void {
    this.studentDataFormControls = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      role_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{3,}$')]),
      phone: new FormControl('', [Validators.pattern('^[0-9]{10}$')]),
      career: new FormControl('0', [Validators.required, Validators.pattern('^[1-4]$')]),
      semester: new FormControl('0', [Validators.required, Validators.pattern('^[1-9]$')]),
      gender: new FormControl(false, Validators.required)
    });
  }

  onStudentDataFormSubmit(): void {
    if (this.studentDataFormControls.valid) {
      const formData = this.studentDataFormControls.value;
      this._appService.storeStudentData(formData);
      window.location.reload();
    } else {
      console.error('¡El formulario no es válido!');
    }
  }

}
