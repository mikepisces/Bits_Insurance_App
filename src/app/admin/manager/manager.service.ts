import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  serverUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  addManager(data) {
    return this.http.post(`${this.serverUrl}/manager`, data)
  }

  getManager(managerId) {
    return this.http.get(`${this.serverUrl}/manager/${managerId}`)
  }

  getAllManager() {
    return this.http.get(`${this.serverUrl}/manager`)
  }

  updateManager(id, data) {
    return this.http.post(`${this.serverUrl}/manager`, data)
  }

  deleteManager(id) {
    return this.http.delete(`${this.serverUrl}/manager/${id}`)
  }

}