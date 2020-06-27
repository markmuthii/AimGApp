import { Storage } from '@ionic/storage';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  phonenumber: string;
  city: string;
  country: string;
  aimGlobalId: string;
  salt: string;
  role: any;

  isMember: any = false;

  constructor(private router: Router, private usersService: UsersService, private storage: Storage) { }

  ngOnInit() {
  }

  signup() {
    this.salt = 'aimgapp-1234';
    this.role = this.isMember ? 2 : 3;

    this.usersService.signupUser({
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      password: this.password,
      email: this.email,
      country: this.country,
      phone: this.phonenumber,
      salt: this.salt,
      role: this.role,
      city: this.city,
      aimid: this.aimGlobalId
    })
    .subscribe(res => {
      console.log(res);
      if (!res['error']) {
        this.router.navigateByUrl('login');
        this.router.dispose();
      }
    });
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  memberSelectionChanged() {
    this.isMember = this.isMember;
  }

}
