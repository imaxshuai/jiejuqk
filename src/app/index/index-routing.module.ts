import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcessComponent } from '../process/process.component';
import { PropagateComponent } from './propagate/propagate.component';

const routes: Routes = [
  { path: 'process', component: ProcessComponent },
  { path: 'propagate', component: PropagateComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class IndexRoutingModule {}
