import { Component, ViewChild, viewChildren } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-employee',
  styleUrl: './employee.css',
  templateUrl: './employee.html', 
  
   
})
export class Employee {

  // name = viewChildren(ViewChildBasics)

  // showEmployeeName(){
  //     this.name().forEach((employee)=>{
  //       employee.showEmployeeName();
  //     });
  // }

  // @ViewChild(ViewChildBasics) child !: ViewChildBasics

  // callChild(){
  //   this.child.showMessage();
  // }
}
