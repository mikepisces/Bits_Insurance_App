export class Policy {
    policyId: number;
    policyPlanId: number;
    customerId: number;
    agentId: number;
    policyDescription: string;
    policyIssueDate: Date;  
    policyEndDate: Date; 
    policyPremiumAmount: number; 
    policyPremiumFrequency: number; 
    termsAndConditions: string;
    policyStatus: string;
  }