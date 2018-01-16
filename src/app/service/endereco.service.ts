import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EnderecoService {

  constructor(private http: Http) {
  }

  getCities(state: string) {
    return this.http.get('http://api.avanade.gama.academy/cities/' + state);
  }

  getStates() {
    return this.http.get('http://api.avanade.gama.academy/states');
  }
}
