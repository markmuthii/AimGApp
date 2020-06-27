import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-products-single',
  templateUrl: './products-single.page.html',
  styleUrls: ['./products-single.page.scss'],
})
export class ProductsSinglePage implements OnInit {

  product: any;
  host: any;
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.navParams.get('product'));
    this.product = this.navParams.get('product');
    this.host = this.navParams.get('host');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  placeOrder(product) {
    console.log('Order will be placed for ', product)
  }

}
