import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  title: string = '';
  id: any;
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private route: ActivatedRoute, private service: ManagerService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit';
      this.getManager(this.id);
    } else {
      this.title = 'Add'
    }
  }

  getManager(id) {
    this.service.getManager(id)
      .subscribe((data) => {
        this.form.setValue(data);
      });
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    let managerId = new Date().getTime();
    data.managerId = managerId;
    data.id = managerId; // for json-server to maintain
    if (this.title == 'Add') {
      this.service.addManager(data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-manager']);
        })
    } else {
      this.service.updateManager(this.id, data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-manager']);
        })
    }
  }

}
