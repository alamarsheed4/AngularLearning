import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-comp-a',
  styleUrl: './comp-a.css',
  templateUrl: './comp-a.html',
})
export class CompA {

  Name:string = "Arsheed Alam"

customerType = 'text';
customerName = 'Customer';

constructor() {
  setTimeout(() => {
    this.customerType = 'checkbox';
    this.customerName = 'Angular 22';
  }, 5000);
}

Message = "This for large mesaage box"

btnClick(){
  console.log('Button Clicked!!');

  console.log(this.employeeName);
  
  
}

placeHolder = 'Enter Your Name'

employeeName = ""

keyUp(eventDetails: KeyboardEvent){

  let inputEle = eventDetails.target as HTMLInputElement
  //  console.log(inputEle);

  // console.dir(inputEle);

  //console.log(inputEle.value);

  this.employeeName = inputEle.value  
   
}
  customerLocation = 'India'
// This approach when you want seperate propery binding and event binding
  // customerLocationChange(customerName:any){
  //   console.log(customerName);

  //   this.customerLocation = customerName
    
  // }

  username = '';

  ischecked = false;

  selectCity = '';


}
