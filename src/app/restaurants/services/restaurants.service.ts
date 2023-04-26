import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Restaurant } from '../models/restaurant';
@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private urlApi: string;
  public collection$: BehaviorSubject<Restaurant[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = 'http://127.0.0.1:8080/spring-jpa/rest/restaurant';
    this.collection$ = new BehaviorSubject<Restaurant[]>([]);
    this.refreshCollection();
  }
  public refreshCollection(): void {
    this.httpClient.get<Restaurant[]>(`${this.urlApi}/list-restaurants`).subscribe((data) => {
      this.collection$.next(data);
      console.log(data)
      console.log("depuis le service" + this.collection$);
    });
  }
}
// getAll: http://127.0.0.1:8080/spring-jpa/rest/restaurant/list-restaurants
// getById: http://127.0.0.1:8080/spring-jpa/rest/restaurant/2
// post : http://127.0.0.1:8080/spring-jpa/rest/restaurant
//  delete :  http://127.0.0.1:8080/spring-jpa/rest/restaurant/50
