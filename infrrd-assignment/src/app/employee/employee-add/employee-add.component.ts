import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  constructor(public route: ActivatedRoute, private dataService: DataServiceService, public router: Router) {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    })
  }
  public id;
  public employeeData: any = {};
  public metaData: any = { designations: [] };

  ngOnInit(): void {
    this.fetchMetaData();
    if (this.id) {
      this.fetchSavedData();
    }
  }
  fetchMetaData() {
    try {
      this.dataService.metaData().subscribe((data: any) => {
        if (data.status) {
          this.metaData = data;
          console.log
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  fetchSavedData() {
    try {
      this.dataService.employeeData().subscribe((data: any) => {
        if (data.status) {
          this.employeeData = data.data;
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  saveData() {
    this.router.navigate(['/employee'])
  }

}
