import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-compB',
  styleUrl: './comp-b.css',
  templateUrl: './comp-b.html',
})
export class CompB {

  onClick(element:any){
    console.log(element);
    console.dir(element);
    console.log(element.value);
    
  }

  onClickTemp(display:any){
      console.log(display);
      
  }

  employeeStatus = false
}
