import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-viewChild',
  styleUrl: './view-child-basics.css',
  templateUrl: './view-child-basics.html',
})
export class ViewChildBasics {

  @ViewChild('employeeName') employeeName !: ElementRef<HTMLInputElement>

  EmployeeName = ""
showEmployee(){
  this.EmployeeName = this.employeeName.nativeElement.value
  console.log(this.employeeName);
  console.log(this.employeeName.nativeElement.value);
  
}
// -------------------------------------------------------//

@ViewChild('heading') title !: ElementRef<HTMLElement>

changeData(){
  this.title.nativeElement.innerHTML = "Hello Software Developer!!"
}
// -------------------------------------------------------//

Message = "This is message from Angular!!!"

showMessage(){
  console.log(this.Message);
  
}
employeeList: string[] = [];


@ViewChildren('employee') employees !: QueryList<ElementRef<HTMLInputElement>>

  showEmployeeDetails(){
     this.employeeList = [];
    this.employees.forEach((employee)=>{
      // console.log(employee.nativeElement.value);

      const name = employee.nativeElement.value.trim()
      if(name)
      this.employeeList.push(name)
      
    })
  }

  @ViewChildren('para') paragraphs !: QueryList <ElementRef>

  showParagraph(){
    this.paragraphs.forEach((p) => {
  console.log(p.nativeElement.innerText);
});
  }


  @ViewChildren('empName') EmpNames !: QueryList <ElementRef>

    showEmpNames(){
      this.EmpNames.forEach((emp)=>{
        console.log(emp.nativeElement.innerText);
        
      })
    }
}

  

