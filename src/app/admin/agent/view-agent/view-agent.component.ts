import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/model/Agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  tableHeader = [
    {
      key: "agentId",
      displayTitle: "Agent Id"
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
      key: "officePhone",
      displayTitle: "Office Phone"
    },
    {
      key: "reportingManagerId",
      displayTitle: "Report Manager Id"
    },
    {
      key: "password",
      displayTitle: "Password"
    },
  ];


  tableData: Agent[] = []

  constructor(private service: AgentService) { }

  ngOnInit() {
    this.getAllAgent();
  }

  getAllAgent() {
    this.service.getAllAgent()
      .subscribe((data: any) => {
        this.tableData = data;
      })
  }

  onDelete(row: Agent) {
    this.service.deleteAgent(row.agentId)
      .subscribe((data) => {
        this.getAllAgent();
      })
  }

}
