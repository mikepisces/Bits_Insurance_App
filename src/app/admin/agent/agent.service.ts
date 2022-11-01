import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addAgent(data) {
    return this.http.post(`${this.serverUrl}/agents`, data)
  }

  getAgent(id) {
    return this.http.get(`${this.serverUrl}/agents/${id}`)
  }

  getAllAgent() {
    return this.http.get(`${this.serverUrl}/agents`)
  }

  updateAgent(id, data) {
    return this.http.put(`${this.serverUrl}/agents/${id}`, data)
  }

  deleteAgent(id) {
    return this.http.delete(`${this.serverUrl}/agents/${id}`)
  }

}