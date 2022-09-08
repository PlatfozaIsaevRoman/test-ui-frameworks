import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevExtremeComponent } from './dev-extreme/dev-extreme.component';
import { PrimeNGComponent } from './prime-ng/prime-ng.component';

const routes: Routes = [
  { path: 'dev-extreme', component: DevExtremeComponent },
  { path: 'prime-ng', component: PrimeNGComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
