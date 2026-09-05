import { Component} from '@angular/core';
import {CompA} from './comp-a/comp-a';
import { FormsModule } from '@angular/forms';
@Component({
  imports:[CompA,FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  Name:string = 'Arsheed Alam'
  title:string = 'Angular Course'
  Salary:number = 34000


  customerRole = 'Admin'
Message = "This is Text Area"
  getUserDetails(){
    return `This is ${this.Name} Salary: ${this.Salary} 
    Title: ${this.title}`
  }

  employeeList: any[] = [" Arsheed ", "Rahul", "Suman", "Kiran"];


  ProjectName = "Angular";

  ProjectTitle = "Basic Angular Application"


}



