import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private dataService: DataServiceService, public router: Router) { }

  public employeeList;

  public filterObj = { name: '' }

  ngOnInit(): void {
    this.getSideMenuData();
  }
  getSideMenuData() {
    try {
      this.dataService.employeeList().subscribe((data: any) => {
        if(data.status) {
          this.employeeList = data.employee;
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  deleteRecord(i) {
    this.employeeList.splice(i, 1);
  }
  moveToAdd() {
    this.router.navigate(['/employee/add'])
  }
}
