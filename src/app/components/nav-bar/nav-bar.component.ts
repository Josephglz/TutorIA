import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  shortFullName: string = '';
  shortName: string = '';
  email: string = '';
  gender: boolean = false;
  collapseOptions: boolean = true;

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.shortFullName = this._appService.getShortFullName();
    this.shortName = this._appService.getShortName();
    this.email = this._appService.StudentData.email;
    this.gender = this._appService.StudentData.gender;
  }

  toggleOptions(): void {
    this.collapseOptions = !this.collapseOptions;
  }

  logout(): void {
    this._appService.deleteStudentData();
    window.location.reload();
  }

  updateData(): void {
    this._appService.safeUpdateStudentData();
    window.location.reload();
  }

}
