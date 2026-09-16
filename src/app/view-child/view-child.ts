import { Component,ElementRef,ViewChild,viewChildren} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child',
  styleUrl: './view-child.css',
  templateUrl: './view-child.html',
})
export class ViewChildComponent {

  @ViewChild('employee') employee !: ElementRef<HTMLInputElement>

  EmployeeName:string = ""

  ShowEmployeeName(){
    this.EmployeeName = this.employee.nativeElement.value

  }

  EmployeeDetails = viewChildren<ElementRef<HTMLInputElement>>('empDetails')

  Details:string[]= [];

  ShowEmployeeDetails(){
    this.EmployeeDetails().forEach((element)=>{
      const data = element.nativeElement.value

      if(data){
        this.Details.push(data);
      }
    })
  }
}
