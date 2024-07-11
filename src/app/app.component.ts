import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { StudentFormComponent } from './components/student-form/student-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SubjectFilterComponent } from './components/subject-filter/subject-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    StudentFormComponent,
    NavBarComponent,
    SubjectFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean = this._appService.isLogged();

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.getStudentData();
    this.loggedIn = this._appService.isLogged();
  }
}
