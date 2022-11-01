import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from '../insurance.service';


@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

  title: string = '';
  id: any;
  plan:any;
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private route: ActivatedRoute, private service: InsuranceService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit';
      this.getPolicyPlan(this.id);
    } else {
      this.title = 'Add'
    }
  }

  getPolicyPlan(id) {
    this.service.getPolicyPlan(id)
      .subscribe((data) => {
        this.form.setValue(data);
      });
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    let CustomerId = new Date().getTime();
    //data.managerId = managerId;
    //data.id = managerId; // for json-server to maintain
    let PolicyId = new Date().getTime();
    data.policyPlanId = PolicyId;
    data.id = PolicyId; // for json-server to maintain
    if (this.title == 'Add') {
      this.service.addPolicyPlan(data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-insurance']);
        })
    } else {
      this.service.updatePolicyPlan(this.id, data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-insurance']);
        })
    }
  }

}
