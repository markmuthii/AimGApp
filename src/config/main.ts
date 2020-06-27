export class MainConfig {
  api: any;
  host: any;

  constructor() {
    this.host = 'https://aimgapp.herokuapp.com';
    this.api = this.host + '/api';
  }

  getApiEndpoint() {
    return this.api;
  }

  getHost() {
    return this.host;
  }
}
