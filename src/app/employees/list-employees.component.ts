import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id : 1,
      name : "Mark",
      gender : "Male",
      contactPreference : "email",
      email : "mark@gmail.com",
      dateOfBirth : new Date('10/25/1988'),
      department : "IT",
      isActive : true,
      photoPath : "assets/images/mark.png"
    },
    {
      id : 2,
      name : "Marry",
      gender : "Female",
      contactPreference : "email",
      email : "mark@gmail.com",
      dateOfBirth : new Date('04/14/1989'),
      department : "IT",
      isActive : true,
      photoPath : "assets/images/marry.png"
    },
    {
      id : 3,
      name : "John",
      gender : "Male",
      contactPreference : "phone",
      phoneNumber : 9878978778,
      dateOfBirth : new Date('11/20/1992'),
      department : "IT",
      isActive : true,
      photoPath : "assets/images/john.png"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
