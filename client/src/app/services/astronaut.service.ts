import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Astronaut } from '../models/astronaut';

@Injectable()
export class AstronautService {
  private astronautsUrl = 'http://localhost:3000/astronauts';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http:Http) { }

  getAstronauts(): Promise<Astronaut[]> {
    return this.http.get(this.astronautsUrl)
      .toPromise()
      .then(response => response.json() as Astronaut[])
      .catch(this.handleError);
  }

  create(astronaut: Astronaut): Promise<Astronaut> {
    return this.http
      .post(this.astronautsUrl, 
        JSON.stringify({
          firstname: astronaut.firstname,
          lastname: astronaut.lastname,
          birthdate: astronaut.birthdate,
          superpower: astronaut.superpower}), 
        {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Astronaut)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.astronautsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}
