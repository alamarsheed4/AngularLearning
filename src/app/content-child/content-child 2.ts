import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-content-child',
  styleUrl: './content-child.css',
  templateUrl: './content-child.html',
})
export class ContentChildComponent {

  @ContentChild('employee') employee!: ElementRef<HTMLElement>

  showEmpDetails(){
    console.log(this.employee.nativeElement.innerText);
  }
}
