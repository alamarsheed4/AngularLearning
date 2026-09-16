import { Component,ElementRef,QueryList,ViewChild,ViewChildren,viewChildren} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child',
  styleUrl: './view-child.css',
  templateUrl: './view-child.html',
})
export class ViewChildComponent {

  // @ViewChild('employee') employee !: ElementRef<HTMLInputElement>

  // EmployeeName:string = ""

  // ShowEmployeeName(){
  //   this.EmployeeName = this.employee.nativeElement.value

  // }

  // EmployeeDetails = viewChildren<ElementRef<HTMLInputElement>>('empDetails')

  // Details:string[]= [];

  // ShowEmployeeDetails(){
  //   this.EmployeeDetails().forEach((element)=>{
  //     const data = element.nativeElement.value

  //     if(data){
  //       this.Details.push(data);
  //     }
  //   })
  // }
// ==========================================================================// 
// @ViewChildren('customer') Customer  !: QueryList<ElementRef<HTMLInputElement>>

//   customerDetails: {
//     firstName: string;
//     lastName: string;
//     location: string;
//   }[] = []

//   Message = " Sorry!!:) You Have entered duplicate Data!!"
  
//    showDetais(){
//     const input = this.Customer.toArray();

//     const fname = input[0].nativeElement.value.trim();
//     const lname = input[1].nativeElement.value.trim();
//     const location = input[2].nativeElement.value.trim();
    
//     if(fname && lname && location){

//       const duplicate = this.customerDetails.some((customer)=>
//         customer.firstName === fname &&
//         customer.lastName === lname &&
//         customer.location === location
//     );
    
//       if(!duplicate){

//       this.customerDetails.push({
//         firstName: fname,
//         lastName: lname,
//         location: location,
//       });
//     }
    
//     else{
//       this.Message
//     }
//   }
// }

// ==========================================================================// 


 Student = viewChildren<ElementRef<HTMLInputElement>>('student')

 Message = "Data is unavailable!!"
 StudentDetails: {
  firstName:string;
  lastName:string;
  location:string;
 }[]=[];

//  StudentDetails:string[] = []
 showMessage = false;

  showStudentDetails(){
    // this.Student().forEach((element)=>{
    //   const details = element.nativeElement.value
    //   if(details)
    //   this.StudentDetails.push(details)
    // })  

    const input  = this.Student();

    const fname = input[0].nativeElement.value.trim();
    const lname = input[1].nativeElement.value.trim();
    const location = input[2].nativeElement.value.trim();

    if(fname && lname && location){

      const duplicate = this.StudentDetails.some((student)=>

        student.firstName.toLowerCase === fname.toLowerCase && 
        student.lastName.toLowerCase === lname.toLowerCase &&
        student.location.toLowerCase === location.toLowerCase
        
    );
  
    if(!duplicate){
      this.StudentDetails.push({
        firstName: fname,
        lastName: lname,
        location: location,
      })
    }
    }

  }
}

