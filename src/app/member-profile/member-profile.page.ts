import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ChatModalPage } from '../chat-modal/chat-modal.page';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.page.html',
  styleUrls: ['./member-profile.page.scss'],
})
export class MemberProfilePage implements OnInit {

  person: any;
  host: any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private storage: Storage,
    private usersService: UsersService
    ) {
    this.person = this.navParams.get('person');
    this.host = this.navParams.get('host');
  }

  ngOnInit() {
  }

  requestSponsorship() {
    this.storage.get('aimgapp-user-access-token')
    .then(value => {
      const leadid = JSON.parse(value).user_id;
      const memberid = this.person.id;
      this.usersService.requestSponsorship(leadid, memberid)
      .subscribe(response => {
        console.log(response);
      });
    });
  }

  acceptLead(lead) {
    console.log(lead);
    this.usersService.acceptLead(lead.id)
    .subscribe(response => {
      console.log(response);
    });
  }

  confirmLead(lead) {
    console.log(lead);
    this.usersService.confirmLead(lead.id)
    .subscribe(response => {
      console.log(response);
    });
  }

  async chatWithTeamMember(person) {
    const modal = await this.modalController.create({
      component: ChatModalPage,
      componentProps: {
        person,
        host: this.host
      }
    });

    modal.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
