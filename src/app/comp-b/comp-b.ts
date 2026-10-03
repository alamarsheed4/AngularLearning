import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-comp-b',
  styleUrl: './comp-b.css',
  templateUrl: './comp-b.html',
})
export class CompB {

  Name:string= 'Raman Singh'
  Salary:number = 50000
  course:string = 'Angular'

  getUserDetails(){
    return `Hey Myself ${this.Name} earn ${this.Salary} per month
    and i am doing ${this.course} Course`
  }

  customerRole = 'Admin'

  Msg = 'This is Text Area'


  customerDetails: string[] = ['Arsheed', 'Raman', 'Rakesh', 'Sudeep', 'Tanvi']

  EmployeeName = ""

  keyUp(eventDetails: KeyboardEvent){
    let element = eventDetails.target as HTMLInputElement

    this.EmployeeName = element.value
  }

  customerName = ''

  employeeName = ''

  getName(){
      this.customerName=this.EmployeeName
  }

  getEmployeeName(name: string){
   this.employeeName= name
  }

}
