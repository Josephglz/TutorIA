import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './subject-filter.component.html',
  styleUrl: './subject-filter.component.css'
})
export class SubjectFilterComponent {
  selectedSubject: number = 0;

  onSubjectChange() {
    console.log(this.selectedSubject);
    //TODO: Implement topics data load from every subject
  }
}
