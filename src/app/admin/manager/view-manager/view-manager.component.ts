import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/model/Manager';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-view-manager',
  templateUrl: './view-manager.component.html',
  styleUrls: ['./view-manager.component.css']
})
export class ViewManagerComponent implements OnInit {

  tableHeader = [
    {
      key: "managerId",
      displayTitle: "Manager Id"
    },
    {
      key: "mgrFname",
      displayTitle: "First Name"
    },
    {
      key: "mgrLname",
      displayTitle: "Last Name"
    },
    {
      key: "mgrMobile",
      displayTitle: "Mobile Number"
    },
    {
      key: "landlineNumber",
      displayTitle: "Landline Number"
    },
    {
      key: "emailAddress",
      displayTitle: "Email Address"
    },
    {
      key: "mgrDept",
      displayTitle: "Department"
    },
    {
      key: "appPwd",
      displayTitle: "Password"
    },
  ];


  tableData: Manager[] = []

  constructor(private service: ManagerService) { }

  ngOnInit() {
    this.getAllManager();
  }

  getAllManager() {
    this.service.getAllManager()
      .subscribe((data: any) => {
        this.tableData = data;
      })
  }

  onDelete(row: Manager) {
    this.service.deleteManager(row.managerId)
      .subscribe((data) => {
        this.getAllManager();
      })
  }

}
