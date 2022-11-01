import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addManager(data) {
    return this.http.post(`${this.serverUrl}/managers`, data)
  }

  getManager(id) {
    return this.http.get(`${this.serverUrl}/managers/${id}`)
  }

  getAllManager() {
    return this.http.get(`${this.serverUrl}/managers`)
  }

  updateManager(id, data) {
    return this.http.put(`${this.serverUrl}/managers/${id}`, data)
  }

  deleteManager(id) {
    return this.http.delete(`${this.serverUrl}/managers/${id}`)
  }

}