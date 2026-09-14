import { Component } from '@angular/core';
import { ContenChildComponent } from '../conten-child-component/conten-child-component';

@Component({
  imports: [ContenChildComponent],
  selector: 'app-content-parent-component',
  styleUrl: './content-parent-component.css',
  templateUrl: './content-parent-component.html',
})
export class ContentParentComponent {

}
