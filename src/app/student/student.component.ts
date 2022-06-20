import { Component, OnInit } from '@angular/core';
import data from '../../assets/student.json';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  studentsData: Student[] = [...data.students];
  keys: string[] = [];
  defaultSorting = '';
  defaultKey = 'name';

  constructor() {}

  ngOnInit(): void {
    this.keys = Object.keys(this.studentsData?.[0]);
  }

  getStudentData(student: Student, key: string): string | number {
    return student[key as keyof Student];
  }

  updateSorting(key: string): void {
    if (key !== this.defaultKey) {
      this.defaultSorting = '';
    }
    this.defaultKey = key;

    if (this.defaultSorting === 'asc') {
      this.performSorting(false, key);
      this.defaultSorting = 'desc';
    } else if (this.defaultSorting === '') {
      this.performSorting(true, key);
      this.defaultSorting = 'asc';
    } else {
      this.studentsData = [...data.students];
      this.defaultSorting = '';
    }
  }

  performSorting(flag: boolean, key: string): void {
      if (flag) {
        this.studentsData.sort((a, b) => this.comparator(a[key as keyof Student], b[key as keyof Student]));
      } else {
        this.studentsData.sort((a, b) => this.comparator(b[key as keyof Student], a[key as keyof Student]));
      }
  }

  comparator(v1: number | string, v2: number | string): number {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }
    
}


export interface Student {
  name: string;
  class: number;
  section: string;
  sub1: number;
  sub2: number;
  sub3: number;
}
