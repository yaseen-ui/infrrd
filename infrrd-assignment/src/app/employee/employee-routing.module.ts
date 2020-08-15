import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

const routes: Routes = [{
  path: '', component: EmployeeComponent,
  children: [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: EmployeeListComponent },
    { path: 'add', component: EmployeeAddComponent },
    { path: 'edit/:id', component: EmployeeAddComponent }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
