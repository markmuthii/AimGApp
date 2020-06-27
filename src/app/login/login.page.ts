import { ControllersService } from './../controllers.service';

import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
// import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: any;
  password: any;

  TOKEN = 'aimgapp-user-access-token';

  constructor(
    private router: Router,
    private user: UsersService,
    private storage: Storage,
    private controllers: ControllersService
  ) {}

  ngOnInit() {
  }

  login() {
    this.controllers.showToast('Checking your details.', 'bottom', 3000);
    this.user.loginUser({
      username: this.username,
      password: this.password
    })
    .subscribe(data => {
      console.log(data['message']);
      // JSON.parse(data);
      this.storage.set(this.TOKEN, JSON.stringify(data));

      // TO-DO: IMPLEMENT ROLE BASED ROUTING
      // tslint:disable-next-line: triple-equals
      if (data['user_role'] == 1) {
        console.log('Admin');
        this.router.navigateByUrl('home');

      // tslint:disable-next-line: triple-equals
      } else if (data['user_role'] == 2) {
        console.log('Admin');
        this.router.navigateByUrl('leads');

      // tslint:disable-next-line: triple-equals
      } else if (data['user_role'] == 3) {
        console.log('Admin');
        this.router.navigateByUrl('member-search');

      }
      this.username = '';
      this.password = '';
    });
  }
  goToSignup() {
    // alert('Going to signup');
    this.router.navigateByUrl('signup');
  }

}
