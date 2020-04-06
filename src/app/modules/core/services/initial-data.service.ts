import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InitialDataService {

  url = 'https://corona-api.com/countries/za';

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get<any>(this.url);
  }
}
