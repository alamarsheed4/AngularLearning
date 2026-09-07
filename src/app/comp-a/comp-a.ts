import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-compA',
  styleUrl: './comp-a.css',
  templateUrl: './comp-a.html',
})
export class CompA {

  zoneStatus = true;

  Message = 'You Are in Safe Zone'

  btnClickEvent(){
    this.zoneStatus = false
    this.Message = 'You are in Red Zone'
  }

  EmployeeGotHike = false

  studentAge = 9

  // Employees = [
  //   {id: 101, name: 'Raman', Salary:3400},
  //   {id: 102, name: 'Rakesh',Salary:6700},
  //   {id: 103, name: 'Kiran',Salary:2300},
  //   {id: 104, name: 'Suman',Salary:4500},
  // ]

   Employees :[{id: '', name: '', Salary:''}] | [] = [];
  
}