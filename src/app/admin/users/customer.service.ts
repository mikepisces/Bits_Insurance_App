import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addCustomer(data) {
    return this.http.post(`${this.serverUrl}/customers`, data)
  }

  getCustomer(id) {
    return this.http.get(`${this.serverUrl}/customers/${id}`)
  }

  getAllCustomers() {
    return this.http.get(`${this.serverUrl}/customers`)
  }

  updateCustomer(id, data) {
    return this.http.put(`${this.serverUrl}/customers/${id}`, data)
  }

  deleteCustomer(id) {
    return this.http.delete(`${this.serverUrl}/users/${id}`)
  }

}