import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { PolicyService } from '../policy.service';
import { Router } from '@angular/router';
import { PolicyPlan } from 'src/app/model/PolicyPlan';
import { Policy } from 'src/app/model/Policy';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  tableHeader = [
    {
      key: "policyId",
      displayTitle: "Policy Id"
    },
    {
      key: "policyPlanId",
      displayTitle: "Policy Plan ID"
    },
    {
      key: "customerId",
      displayTitle: "Customer ID"
    },
    {
      key: "agentid",
      displayTitle: "Agent ID"
    },
    {
      key: "policyDescription",
      displayTitle: "Policy Description"
    },
    {
      key: "policyIssueDate",
      displayTitle: "Policy Issue Date"
    },
    {
      key: "policyEndDate",
      displayTitle: "Policy End Date"
    },
    {
      key: "policyPremiumAmount",
      displayTitle: "Premium Amount"
    },
    {
      key: "state",
      displayTitle: "state"
    },
    {
      key: "policyPremiumFrequency",
      displayTitle: "Premium Frequency"
    },
    {
      key: "termsAndConditions",
      displayTitle: "TnC"
    },
    {
      key: "policyStatus",
      displayTitle: "Policy Status"
    },
  ];


  tableData: PolicyPlan[] = []

  constructor(private service: PolicyService) { }

  ngOnInit() {
    this.getAllPolicies();
  }

  getAllPolicies() {
    this.service.getAllPolicies()
      .subscribe((data: any) => {
        console.log(data)
        this.tableData = data;
      })
  }

  onDelete(row: Policy) {
    this.service.deletePolicy(row.policyId)
      .subscribe((data) => {
        this.getAllPolicies();
      })
  }

}
