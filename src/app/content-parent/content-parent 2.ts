import { Component} from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child';

@Component({
  imports: [ContentChildComponent],
  selector: 'app-contentP',
  styleUrl: './content-parent.css',
  templateUrl: './content-parent.html',
})
export class ContentParentComponent {}
