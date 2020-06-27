import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ControllersService {

  toast: any;
  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  /*
  * Method showToast()
  * Display a toast on the application
  * Takes three arguments: message: string, position: string, duration: integer
  */
  showToast(message, position, duration) {
    this.toast = this.toastController.create({
      message,
      duration,
      position
    })
    .then(toastData => {
      toastData.present();
    });
  }

  hideToast() {
    this.toast = this.toastController.dismiss();
  }

  /*
  * Method showAlert()
  * Display an alert on the application
  * Takes three arguments: header: string, message: string, buttons: string[]
  */
  showAlert(header: string, message: string, buttons: string[]) {
    this.alertController.create({
      header,
      message,
      buttons
    });
  }
}
