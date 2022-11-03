import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  serverUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  // addPolicy(data) {
  //   return this.http.post(`${this.serverUrl}/policy`, data)
  // }

  getPolicy(id) {
    return this.http.get(`${this.serverUrl}/policy/${id}`)
  }

  getAllPolicies() {
    return this.http.get(`${this.serverUrl}/policy`)
  }

  updatePolicy(id, data) {
    return this.http.post(`${this.serverUrl}/policy`, data)
  }

  deletePolicy(id) {
    return this.http.delete(`${this.serverUrl}/policy/${id}`)
  }

}