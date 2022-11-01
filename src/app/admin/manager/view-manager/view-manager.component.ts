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
      key: "firstName",
      displayTitle: "First Name"
    },
    {
      key: "lastName",
      displayTitle: "Last Name"
    },
    {
      key: "mobileNumber",
      displayTitle: "Mobile Number"
    },
    {
      key: "landlineNumber",
      displayTitle: "Landline Number"
    },
    {
      key: "email",
      displayTitle: "Email Address"
    },
    {
      key: "department",
      displayTitle: "Department"
    },
    {
      key: "password",
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
