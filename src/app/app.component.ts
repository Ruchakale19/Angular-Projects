import { Component, OnInit } from '@angular/core';
import {Employee} from './employee'
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    debugger;
    this.getDataFromApi();
  }
  
  title = 'My Project';

  employee: Employee[] = [
    new Employee(1, 'Scott', 10000),
    new Employee(2, 'John', 20000),
    new Employee(3, 'Mary', 30000),
    new Employee(4, 'Jenny', 25000)
  ];

  newEmployee: Employee = new Employee(null, null, null);



  onDeleteClick(index:any) {
    if(confirm("Are you Sure to delete this employee?")) {
      this.employee.splice(index, 1);
    }
  }

  constructor(private apiCall: ApiCallService) {}

    getDataFromApi() {
    this.apiCall.getData().subscribe((res) => {
      debugger;
      console.log('Response' + res);
    });
  }

  onInsertClick() {
    this.employee.push(
      new Employee(this.newEmployee.empId, this.newEmployee.empName, this.newEmployee.salary)
    );
    this.newEmployee.empId = null;
    this.newEmployee.empName = null;
    this.newEmployee.salary = null;
  }
  
}
