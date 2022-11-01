import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  title: string = '';
  id: any;
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private route: ActivatedRoute, private service: CustomerService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit';
      this.getCustomer(this.id);
    } else {
      this.title = 'Add'
    }
  }

  getCustomer(id) {
    this.service.getCustomer(id)
      .subscribe((data) => {
        this.form.setValue(data);
      });
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    //--------------
    let CustomerId = new Date().getTime();
    data.customerId = CustomerId;
    data.id = CustomerId; // for json-server to maintain
    //----------------
    if (this.title == 'Add') {
      this.service.addCustomer(data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-customers']);
        })
    } else {
      this.service.updateCustomer(this.id, data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-customers']);
        })
    }
  }

}
