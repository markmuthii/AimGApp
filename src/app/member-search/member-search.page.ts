import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MemberProfilePage } from '../member-profile/member-profile.page';
import { MainConfig } from 'src/config/main';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.page.html',
  styleUrls: ['./member-search.page.scss'],
})
export class MemberSearchPage implements OnInit {

  members: any;
  country = '';
  host: any;
  isKeyEntered = false;

  constructor(private usersService: UsersService, private modalController: ModalController) {
    this.host = new MainConfig().getHost();
  }

  ngOnInit() {
  }

  searchChanged($event: Event) {
    this.isKeyEntered = this.country === '' ? false : true;
    this.usersService.searchMembers(this.country)
    .subscribe(members => {
      // console.log(members);
      this.members = members;
    });
  }

  async viewMemberProfile(person) {
    const modal = await this.modalController.create({
      component: MemberProfilePage,
      componentProps: {
        person,
        host: this.host
      }
    });

    modal.present();
  }

}
