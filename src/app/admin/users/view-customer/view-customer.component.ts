import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Customer } from 'src/app/model/Customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  tableHeader = [
    {
      key: "customerId",
      displayTitle: "Customer Id"
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
      key: "address",
      displayTitle: "Address"
    },
    {
      key: "city",
      displayTitle: "City"
    },
    {
      key: "pinCode",
      displayTitle: "Pin Code"
    },
    {
      key: "state",
      displayTitle: "State"
    },
    {
      key: "dateOfBirth",
      displayTitle: "DOB"
    },
    {
      key: "email",
      displayTitle: "Email Address"
    },
    {
      key: "password",
      displayTitle: "Password"
    },
  ];


  tableData: Customer[] = []

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.service.getAllCustomers()
      .subscribe((data: any) => {
        this.tableData = data;
      })
  }

  onDelete(row: Customer) {
    this.service.deleteCustomer(row.customerId)
      .subscribe((data) => {
        this.getAllCustomers();
      })
  }

}
