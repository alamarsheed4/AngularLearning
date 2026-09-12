import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-content-child',
  styleUrl: './content-child.css',
  templateUrl: './content-child.html',
})
export class ContentChildComponent implements AfterContentInit {

  EmployeeName =""

  @ContentChild('employee') employee!: ElementRef<HTMLElement>

  ngAfterContentInit(): void {
    console.log(this.employee);
    console.log(this.employee.nativeElement.innerText);
    
    
  }

  // showEmpDetails(){
  //   console.log(this.employee);

  //   this.EmployeeName = this.employee.nativeElement.innerHTML
  // }

  // EmpList: string[] = [];

  // @ContentChildren('paragraph') Paragraph !: QueryList<ElementRef<HTMLElement>>


  // showEmployees(){
  //   this.Paragraph.forEach((paragraph:ElementRef<HTMLElement>)=>{
  //       console.log(paragraph.nativeElement.innerHTML);
  //       let para = paragraph.nativeElement.innerHTML
  //       if(para){
  //         this.EmpList.push(para)
  //       }
        
  //   })
  // }

  // EmployeeDet:string[] = []

  // @ContentChildren('input') employees!: QueryList<ElementRef<HTMLInputElement>>;

  // inputBoxDetails(){

  //     this.employees.forEach((emp:ElementRef<HTMLInputElement>)=>{
        
  //     let EmpDet =emp.nativeElement.value;
  //     if(EmpDet){
  //       this.EmployeeDet.push(EmpDet);
  //     }
      
      
  // })

  // }

}
