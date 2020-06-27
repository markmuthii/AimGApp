import { UsersService } from './../users.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UsersService, private storage: Storage, private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const isTutorialComplete = await this.storage.get('aimgapp-tutorial-complete');
    const isAuthenticated = await this.storage.get('aimgapp-user-access-token');

    if (!isTutorialComplete) {
      this.router.navigateByUrl('intro');
    } else if (isTutorialComplete && !isAuthenticated) {
      this.router.navigateByUrl('login');
    } else if (isTutorialComplete && isAuthenticated) {
      this.router.navigateByUrl('home');
    }

    return isTutorialComplete && isAuthenticated;
  }
}
