import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MemberProfilePage } from '../member-profile/member-profile.page';
import { MainConfig } from 'src/config/main';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.page.html',
  styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit {

  leads: any;
  host: any;

  constructor(
    private usersService: UsersService,
    private modalController: ModalController,
    private storage: Storage
  ) {
    this.host = new MainConfig().getHost();
    this.storage.get('aimgapp-user-access-token')
    .then(user => {
      this.usersService.fetchLeads(JSON.parse(user).user_id)
      .subscribe(response => {
        console.log(response);
        this.leads = response;
      });
    });
  }

  ngOnInit() {
  }

  async viewLeadProfile(person) {
    person.isLead = true;
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
