import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finishTutorial() {
    this.storage.set('aimgapp-tutorial-complete', true);
  }

  goToLogin() {
    this.finishTutorial();
    this.router.navigateByUrl('login');
    this.router.dispose();
  }

  goToSignup() {
    this.finishTutorial();
    this.router.navigateByUrl('signup');
    this.router.dispose();
  }

}
