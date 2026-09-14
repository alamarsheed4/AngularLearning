import { Component, contentChild, contentChildren, ElementRef} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-conten-child-component',
  styleUrl: './conten-child-component.css',
  templateUrl: './conten-child-component.html',
})
export class ContenChildComponent {

  EmployeeName = contentChild<ElementRef<HTMLInputElement>>('employee')

  EmployeeNameSt:string = "";

  showDetails(){
    this.EmployeeNameSt = this.EmployeeName()?.nativeElement.value??"";
    console.log(this.EmployeeNameSt);
    
    }

    EmpName =contentChildren<ElementRef<HTMLInputElement>>('empName')

    empNameDetails: string[] = []
  
    showNameDetails(){
      // this.empNameDetails = []
      this.EmpName().forEach((name)=>{
        //console.log(name.nativeElement.value);
        if(name){
        this.empNameDetails.push(name.nativeElement.value)
        }
      })
    }
}
