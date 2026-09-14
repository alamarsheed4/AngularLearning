import { AfterViewInit, computed, Component, ElementRef, QueryList,signal,viewChild, viewChildren, ViewChildren } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-viewChild',
  styleUrl: './view-child-basics.css',
  templateUrl: './view-child-basics.html',
})
export class ViewChildBasics{

  //@ViewChild('employeeName') employeeName !: ElementRef<HTMLInputElement>

  // ngAfterViewInit(): void {
  //   console.log(this.employeeName.nativeElement.value);
    
  // }

  employeeName=viewChild<ElementRef<HTMLInputElement>>('employeeName')

  EmployeeName:string = ""
  employeeEmailSt:string =""

  employeeEMail=viewChild<ElementRef<HTMLInputElement>>('employeeEmail')
  
  selectedEmployeeEmail = signal('')

  showEmployee(){
  this.EmployeeName = this.employeeName()?.nativeElement.value?? "";
  console.log(this.employeeName);
  //console.log(this.employeeName().nativeElement.value?? "");
  
}

showEmail(){
  this.employeeEmailSt = this.employeeEMail()?.nativeElement.value??""

  this.selectedEmployeeEmail.set(this.employeeEmailSt);
  console.log(this.employeeEmailSt);
  
}
// -------------------view Children signal based query----------------------------//

    empName = viewChildren<ElementRef<HTMLInputElement>>('emp')

    EmpDetails:string[] = []

    showDetails(){
      this.EmpDetails = [];
      this.empName().forEach((name)=>{
         console.log(name.nativeElement.value);
          
         if(name)
         this.EmpDetails.push(name.nativeElement.value)

         console.log(this.EmpDetails);

      });
    }

      paragraph = viewChildren<ElementRef<HTMLParagraphElement>>('para');

      paragraphTexts: string[]=[]

      showEmployeeData(){
        this.paragraph().forEach((para)=>{
           console.log(para.nativeElement.innerText);
           
           this.paragraphTexts.push(para.nativeElement.innerText)
        })
         console.log(this.paragraph().length);

      }
 // -------------------view Children signal based query----------------------------//
 
 name = "Rajat saxena"

 showEmployeeName(){
  console.log(this.name);
  
 }

// -------------------------------------------------------//

// @ViewChild('heading') title !: ElementRef<HTMLElement>



// changeData(){
//   this.title.nativeElement.innerHTML = "Hello Software Developer!!"
// }
// // -------------------------------------------------------//

// Message = "This is message from Angular!!!"

// showMessage(){
//   console.log(this.Message);
  
// }
// employeeList: string[] = [];


// @ViewChildren('employee') employees !: QueryList<ElementRef<HTMLInputElement>>

//   showEmployeeDetails(){
//      this.employeeList = [];
//     this.employees.forEach((employee)=>{
//       // console.log(employee.nativeElement.value);

//       const name = employee.nativeElement.value.trim()
//       if(name)
//       this.employeeList.push(name)
      
//     })
//   }

//   @ViewChildren('para') paragraphs !: QueryList <ElementRef>

//   showParagraph(){
//     this.paragraphs.forEach((p) => {
//   console.log(p.nativeElement.innerText);
// });
//   }


//   @ViewChildren('empName') EmpNames !: QueryList <ElementRef>

//     showEmpNames(){
//       this.EmpNames.forEach((emp)=>{
//         console.log(emp.nativeElement.innerText);
        
//       })
//     }
// }

employeeCount = 0;
//employees is the List of htmlinputelements

employeeCounts = computed(()=> this.empName.length)
}
