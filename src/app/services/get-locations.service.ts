import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


const url = 'http://localhost:3000/';

@Injectable()
export class GetLocationsService {

  constructor(private http: Http) {
  }

  getSpecificLocation(id: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('getRequests/' + id)
      .map((res) => res.json());
  }

  updateStatus(id: any) {
    console.log(id);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('getRequests/updateStatus/' + id)
      .map((res) => res.json());
  }

  getLocations() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('getRequests/', {headers: headers})
      .map(res => res.json());
  }

  getAccidentsPerMonth() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('getRequests/accidentsPerMonth', {headers: headers})
      .map(res => res.json());
  };
}
