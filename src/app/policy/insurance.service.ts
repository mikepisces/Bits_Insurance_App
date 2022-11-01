import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addPolicyPlan(data) {
    return this.http.post(`${this.serverUrl}/policyPlan`, data)
  }

  getPolicyPlan(id) {
    return this.http.get(`${this.serverUrl}/policyPlan/${id}`)
  }

  getAllPolicyPlans() {
    return this.http.get(`${this.serverUrl}/policyPlan`)
  }

  updatePolicyPlan(id, data) {
    return this.http.put(`${this.serverUrl}/policyPlan/${id}`, data)
  }

  deletePolicyPlan(id) {
    return this.http.delete(`${this.serverUrl}/policyPlan/${id}`)
  }

}