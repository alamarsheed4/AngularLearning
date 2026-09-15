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
  
    showNameDetails() {
    this.empNameDetails = [];

    this.EmpName().forEach((name) => {

    const employeeName = name.nativeElement.value.trim();

    if (employeeName !== '') {
      this.empNameDetails.push(employeeName);
    }
  });
}

  paragraphs  =contentChildren<ElementRef<HTMLParagraphElement>>('paragraph')

  paragraphElement:string[] = [];

  Message = "No Paragraph is available"

  showParagraph(){
    this.paragraphElement = []
    this.paragraphs().forEach(element => {
      console.log(element.nativeElement.innerText);

      const Ele = element.nativeElement.innerText

      if(Ele !== ""){
        this.paragraphElement.push(Ele)
      }else
      {
        this.Message
      }
      
    });
  }
}
