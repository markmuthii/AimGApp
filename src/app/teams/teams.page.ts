import { MemberProfilePage } from './../member-profile/member-profile.page';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MainConfig } from 'src/config/main';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  teams: any;
  host: any;

  constructor(
    private storage: Storage,
    private usersService: UsersService,
    private modalController: ModalController
  ) {
    this.host = new MainConfig().getHost();
    this.storage.get('aimgapp-user-access-token')
    .then(user => {
      this.usersService.getTeamMembers(JSON.parse(user).user_id)
      .subscribe(response => {
        console.log(response);
        this.teams = response['teams'] ? response['teams'] : '';
      });
    });
  }

  ngOnInit() {
  }

  async viewTeamMemberProfile(person) {
    person.isTeamMember = true;
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
