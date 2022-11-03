import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  title: string = '';
  id: any;
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private route: ActivatedRoute, private service: PolicyService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit';
      this.getPolicy(this.id);
    } else {
      this.title = 'Add'
    }
  }

  getPolicy(id) {
    this.service.getPolicy(id)
      .subscribe((data) => {
        this.form.setValue(data);
      });
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    // let policyId = new Date().getTime();
    // data.policyId = policyId;
    // data.id = policyId; // for json-server to maintain
    if (this.title == 'Add') {
      this.service.addPolicy(data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-policies']);
        })
    } else {
      this.service.updatePolicy(this.id, data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-policies']);
        })
    }
  }

}
