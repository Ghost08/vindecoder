import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecodeComponent } from './decode/decode.component';

const routes: Routes = [
  {
    path:'',
    component:DecodeComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
