import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private REST_API_SERVER = "/assets/jsons/";

  constructor(private httpClient: HttpClient) { }

  public employeeList() {
    return this.httpClient.get(this.REST_API_SERVER + 'employeeList.json');
  }
  public employeeData() {
    return this.httpClient.get(this.REST_API_SERVER + 'employeeData.json');
  }
  public metaData() {
    return this.httpClient.get(this.REST_API_SERVER + 'metaData.json');
  }
}
