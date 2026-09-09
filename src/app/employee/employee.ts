import { Component, ViewChild } from '@angular/core';
import { ViewChildBasics } from '../view-child-basics/view-child-basics';

@Component({
  imports: [],
  selector: 'app-employee',
  styleUrl: './employee.css',
  templateUrl: './employee.html',
})
export class Employee {

  @ViewChild(ViewChildBasics) child !: ViewChildBasics

  callChild(){
    this.child.showMessage();
  }
}
