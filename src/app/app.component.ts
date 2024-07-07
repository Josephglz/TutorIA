// import { Component, OnInit } from '@angular/core';
// import { FormsModule, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { AppService } from './app.service';
// import { Student } from './Student';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterOutlet,
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   studentData: Student = {} as Student;
//   studentDataFormControls: FormGroup = {} as FormGroup;

//   constructor(private _appService: AppService) { }

//   ngOnInit(): void {
//     this._appService.getStudentData(); // Recuperar datos en la inicialización del componente
//     this.createStudentDataForm(); // Crear el formulario al iniciar el componente
//   }

//   createStudentDataForm(): void {
//     this.studentDataFormControls = new FormGroup({
//       firstName: new FormControl('', Validators.required),
//       lastName: new FormControl('', Validators.required),
//       role_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
//       email: new FormControl('', [Validators.required, Validators.email]),
//       phone: new FormControl('', [Validators.pattern('^[0-9]{10}$')]),
//       career: new FormControl('', [Validators.required, Validators.pattern('^[1-4]$')]),
//       semester: new FormControl('', [Validators.required, Validators.pattern('^[1-9]$')])
//     });
//   }

//   onStudentDataFormSubmit(): void {
//     if (this.studentDataFormControls.valid) {
//       this._appService.storeStudentData(this.studentDataFormControls.value);
//       console.log(this.studentDataFormControls.value);
//     } else {
//       console.error('¡El formulario no es válido!');
//       alert('¡El formulario no es válido!');
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { Student } from './Student';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule, // Keep if you need template-driven forms
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  studentData: Student = {} as Student;
  studentDataFormControls: FormGroup = {} as FormGroup;

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.getStudentData(); // Retrieve data on component initialization
    this.createStudentDataForm();
  }

  createStudentDataForm(): void {
    this.studentDataFormControls = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      role_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{3,}$')]),
      phone: new FormControl('', []),
      career: new FormControl('0', [Validators.required, Validators.pattern('^[1-4]$')]),
      semester: new FormControl('0', [Validators.required, Validators.pattern('^[1-9]$')])
    });
  }

  onStudentDataFormSubmit(): void {
    if (this.studentDataFormControls.valid) {
      const formData = this.studentDataFormControls.value;
      this._appService.storeStudentData(formData);
      console.log('Form submitted:', formData);
    } else {
      console.error('¡El formulario no es válido!');
    }
  }
}
