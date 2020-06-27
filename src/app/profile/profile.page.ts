import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ld: any;
  profileInfo: any;

  constructor(private storage: Storage, private loadingController: LoadingController) {
    this.loadingController.create({
      message: 'Fetching your details...',
      spinner: 'dots'
    });
    this.getProfileInfo();
  }

  ngOnInit() {

  }

  async getProfileInfo() {
    await this.storage.get('aimgapp-user-access-token')
    .then(value => {
      console.log('Value: ', value);
      this.profileInfo = JSON.parse(value);
      console.log(this.profileInfo);
      this.loadingController.dismiss();
    });


  }

  editProfile() {}

}
