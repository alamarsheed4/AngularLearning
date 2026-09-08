import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompA } from './comp-a/comp-a';
import { CompB } from './comp-b/comp-b';
import { CompC } from './comp-c/comp-c';
@Component({
  imports:[FormsModule, CommonModule,CompA,CompB,CompC],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  EmployeeName = ['Robert','John','Peter']


  EmployeeDetails = [
    {
      Name: 'John',
      Salary: '34k',
      Age   : 23

  },
    {
      Name: 'Peter',
      Salary: '14k',
      Age   : 34

  },
    {
      Name: 'Parker',
      Salary: '23k',
      Age   : 33

  },
]

index = 1

customerId = 10;

}





