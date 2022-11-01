import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  title: string = '';
  id: any;
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private route: ActivatedRoute, private service: AgentService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit';
      this.getAgent(this.id);
    } else {
      this.title = 'Add'
    }
  }

  getAgent(id) {
    this.service.getAgent(id)
      .subscribe((data) => {
        this.form.setValue(data);
      });
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    let agentId = new Date().getTime();
    data.agentId = agentId;
    data.id = agentId; // for json-server to maintain
    if (this.title == 'Add') {
      this.service.addAgent(data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-agent']);
        })
    } else {
      this.service.updateAgent(this.id, data)
        .subscribe((response) => {
          this.router.navigate(['/admin/view-agent']);
        })
    }
  }

}
