import { MainConfig } from './../config/main';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiEndpoint: any;
  authState = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.apiEndpoint = new MainConfig().getApiEndpoint();
  }

  loginUser(userData: any) {
    return this.http.post(`${this.apiEndpoint}/users/login`, userData);
  }

  signupUser(userData: any) {
    console.log(userData);
    return this.http.post(`${this.apiEndpoint}/users/register`, userData);
  }

  isAuthenticated() {
    return this.authState.value;
  }

  searchMembers(country) {
    return this.http.get(`${this.apiEndpoint}/users/search/${country}`);
  }

  requestSponsorship(leadid, memberid) {
    return this.http.post(`${this.apiEndpoint}/leads/new`, {
      leadid,
      memberid
    });
  }

  fetchLeads(memberid) {
    console.log(memberid);
    return this.http.get(`${this.apiEndpoint}/leads/fetch/${memberid}`);
  }

  acceptLead(leadid) {
    return this.http.put(`${this.apiEndpoint}/leads/accept/${leadid}`, {});
  }

  confirmLead(id) {
    return this.http.post(`${this.apiEndpoint}/leads/confirm/`, {
      id
    });
  }

  getTeamMembers(memberid) {
    return this.http.get(`${this.apiEndpoint}/teams/fetch/${memberid}`);
  }
}
