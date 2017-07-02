import { Component } from '@angular/core';
import {flyIn} from '../animations/fly-in';
import {fadeIn} from '../animations/fade-in';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
  animations: [flyIn, fadeIn]
})
export class ProcessComponent {
  count = 1;

}
