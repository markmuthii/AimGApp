import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.page.html',
  styleUrls: ['./chat-modal.page.scss'],
})
export class ChatModalPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private socket: Socket
  ) {
    this.socket.connect();
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
