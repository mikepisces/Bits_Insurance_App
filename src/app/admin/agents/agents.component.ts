import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User ';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import mockAgents from '../../../assets/mockData/agentsData.json'

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {


  agents: Array<any>;
  action: string;
  selectedUser: User;
  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.agents = mockAgents;
    //this.refreshData();
  }

  // refreshData(){
  //   console.log('Test');
  //   this.httpClientService.getUsers().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //   );

  //   this.activatedRoute.queryParams.subscribe(
  //     (params) => {
  //       this.action = params['action'];
  //       const selectedUserId = params['id'];
  //       if (selectedUserId) {
  //         this.selectedUser = this.users.find(user => user.id === +selectedUserId);
  //       }
  //     }
  //   );

  // }

  // viewUser(id: number) {
  //   this.router.navigate(['admin','users'], {queryParams : {id, action: 'view'}});
  // }

  // addUser() {
  //   this.selectedUser = new User();
  //   this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
  // }

  // handleSuccessfulResponse(response) {
  //   this.users = response;
  // }

}
