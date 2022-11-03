import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  serverUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  addCustomer(data) {
    return this.http.post(`${this.serverUrl}/customer`, data)
  }

  getCustomer(id) {
    return this.http.get(`${this.serverUrl}/customer/${id}`)
  }

  getAllCustomers() {
    return this.http.get(`${this.serverUrl}/customer`)
  }

  updateCustomer(id, data) {
    return this.http.post(`${this.serverUrl}/customer`, data)
  }

  deleteCustomer(id) {
    return this.http.delete(`${this.serverUrl}/customer/${id}`)
  }

}