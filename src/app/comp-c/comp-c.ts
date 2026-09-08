import { ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-compC',
  styleUrl: './comp-c.css',
  templateUrl: './comp-c.html',
})
export class CompC {

  Employee = 'John'

  constructor(private cd: ChangeDetectorRef){}

  changeEmployee(){
    this.Employee = "Arsheed Alam";
  }

  currentDate = new Date();

  setTime(){
    setInterval(()=>{
      this.currentDate = new Date();
      this.cd.markForCheck();
    },1000)
    this.currentDate = new Date();
  }

  EmployeeName = signal("Rohan kumar")

  EmployeeCount = signal(1)

  changeDetails(){
    this.EmployeeName.set('Rohit Raj')
    this.EmployeeCount.set(10)
  }

  updateDetails(){
    this.EmployeeName.update((currentName:string)=>{
        return currentName = 'Rajat Sharma'
    })
  }

  increaseEmployeeCount(){
    this.EmployeeCount.update((currentCount:number)=>{
    return currentCount = currentCount + 1
    })
  }
  decreaseEmployeeCount(){
    this.EmployeeCount.update((currentCount:number)=>{
    if(currentCount<1){
      return currentCount = 0
    }else{
      return currentCount = currentCount -1;
    }
    })
  }
}
