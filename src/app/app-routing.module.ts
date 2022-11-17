import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';

const routes: Routes = [
 {path:'create-laptop',component:CreateLaptopComponent},
 {path:'laptop-list',component:LaptopListComponent},
 {path:'laptop-details/:id', component:LaptopDetailsComponent },
 {path: 'update-laptop/:id',component:UpdateLaptopComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
