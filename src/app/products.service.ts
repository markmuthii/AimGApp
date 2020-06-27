import { MainConfig } from './../config/main';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiEndpoint: any;
  serverHost: any;
  config: any;

  constructor(private http: HttpClient) {
    this.config = new MainConfig();
    this.apiEndpoint = this.config.getApiEndpoint();
    this.serverHost = this.config.getHost();
  }

  getAllProducts() {
    return this.http.get(`${this.apiEndpoint}/products`);
  }

  createProduct(productDetails: any) {
    return this.http.post(`${this.apiEndpoint}/products/create`, productDetails);
  }

  updateProduct(productId: any) {
  }

  deleteProduct(productId: any) {
  }
}
