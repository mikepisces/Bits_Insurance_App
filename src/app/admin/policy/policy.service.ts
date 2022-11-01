import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  // addPolicy(data) {
  //   return this.http.post(`${this.serverUrl}/policies`, data)
  // }

  getPolicy(id) {
    return this.http.get(`${this.serverUrl}/policies/${id}`)
  }

  getAllPolicies() {
    return this.http.get(`${this.serverUrl}/policies`)
  }

  updatePolicy(id, data) {
    return this.http.put(`${this.serverUrl}/policies/${id}`, data)
  }

  deletePolicy(id) {
    return this.http.delete(`${this.serverUrl}/policies/${id}`)
  }

}