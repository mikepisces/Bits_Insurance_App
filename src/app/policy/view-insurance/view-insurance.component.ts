import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { InsuranceService } from '../insurance.service';
// import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';
import { PolicyPlan } from 'src/app/model/PolicyPlan';

@Component({
  selector: 'app-view-insurance',
  templateUrl: './view-insurance.component.html',
  styleUrls: ['./view-insurance.component.css']
})
export class ViewInsuranceComponent implements OnInit {

  tableHeader = [
    {
      key: "policyPlanId",
      displayTitle: "Policy Id"
    },
    {
      key: "policyPlanName",
      displayTitle: "Policy Plan name"
    },
    {
      key: "policyPlanType",
      displayTitle: "Policy Plan type"
    },
    {
      key: "policyPlanTerm",
      displayTitle: "Policy plan term"
    },
    {
      key: "commissionPercent",
      displayTitle: "Commision percentage"
    },
  ];

  tableData: PolicyPlan[] = []

  constructor(private service: InsuranceService) { }

  ngOnInit() {
    this.getAllPolicyPlans();
  }

  getAllPolicyPlans() {
    this.service.getAllPolicyPlans()
      .subscribe((data: any) => {
        this.tableData = data;
      })
  }

  onDelete(row: PolicyPlan) {
    this.service.deletePolicyPlan(row.policyPlanId)
      .subscribe((data) => {
        this.getAllPolicyPlans();
      })
  }

}
