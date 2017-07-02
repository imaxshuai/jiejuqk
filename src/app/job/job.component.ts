import { Component, OnInit } from '@angular/core';

import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  animations: [flyIn]
})
export class JobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
