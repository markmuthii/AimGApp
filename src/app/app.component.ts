import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'basket'
    },
    {
      title: 'Members',
      url: '/member-search',
      icon: 'people'
    },
    {
      title: 'Leads',
      url: '/leads',
      icon: 'people'
    },
    {
      title: 'Teams',
      url: '/teams',
      icon: 'people'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    }
  ];

  TOKEN = 'aimgapp-user-access-token';
  year: any;
  isLoggedIn = false;
  tokenData: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.year = new Date().getFullYear();
  }

  logout() {
    this.storage.remove(this.TOKEN);
    this.router.navigateByUrl('login');
  }
}
