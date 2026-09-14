import { Component} from '@angular/core';
import { ContenChildComponent } from './conten-child-component/conten-child-component';
import { ContentParentComponent } from './content-parent-component/content-parent-component';
@Component({
  imports:[ContentParentComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 
}





