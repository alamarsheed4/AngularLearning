import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports:[FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  divBgColor = 'blue'
  divTextColor = 'white'

  divCheckStatus = true

  divSucceesClass = 'success'
  divFailClass = 'failure'
  
  divSuccessMessage = "This is success Message"
  divFailureMessage = "This is Failure Message"

  Message = this.divSuccessMessage

  currentClass = this.divSucceesClass

  checkStatus(){
    if(this.currentClass === this.divSucceesClass){
       this.currentClass = this.divFailClass
       this.Message = this.divFailureMessage
    }else{
       this.currentClass = this.divSucceesClass
       this.Message = this.divSuccessMessage
    }
  }

ngElement = "ngIf Element"

isVisible = false

showMessage(){
   if(this.isVisible == true){
    this.isVisible = false
   }else{
    this.isVisible = true
   }
}

age= 34

}





