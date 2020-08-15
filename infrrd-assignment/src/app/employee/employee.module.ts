import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import {SelectModule} from 'ng-select';



@NgModule({
  declarations: [EmployeeComponent, EmployeeAddComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FilterPipeModule,
    FormsModule,
    SelectModule
  ]
})
export class EmployeeModule { }
