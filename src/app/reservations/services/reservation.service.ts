import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { RestaurantsService } from 'src/app/restaurants/services/restaurants.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private urlApi: string;
  public collection$: BehaviorSubject<Reservation[]>;

  constructor(
    private httpClient: HttpClient,
    private restaurantService: RestaurantsService
  ) {
    this.urlApi = 'http://127.0.0.1:8080/spring-jpa/rest/reservation';
    this.collection$ = new BehaviorSubject<Reservation[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.httpClient
      .get<Reservation[]>(`${this.urlApi}/list-reservations`)
      .subscribe((data) => {
        this.collection$.next(data);
        console.log(data);
        console.log('depuis le service' + this.collection$);
      });
  }

  public getById(id: number): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.urlApi}/${id}`);
  }

  public add(item: Reservation): Observable<Reservation> {

     return this.httpClient.post<Reservation>(this.urlApi, item);
    
     }
}
