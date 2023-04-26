import { Injectable } from '@angular/core';
import { TypeRestaurant } from '../models/type-restaurant';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class TypeRestaurantService {
  private urlApi: string;
  public collection$: BehaviorSubject<TypeRestaurant[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = 'http://127.0.0.1:8080/spring-jpa/rest/type-restaurant';
    this.collection$ = new BehaviorSubject<TypeRestaurant[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.httpClient
      .get<TypeRestaurant[]>(`${this.urlApi}/list-type-restaurant`)
      .subscribe((data) => {
        this.collection$.next(data);
        //console.log(data);
        console.log('depuis le service' + this.collection$);
      });
  }

  public getById(id: number): Observable<TypeRestaurant> {
    console.log(`${this.urlApi}/${id}`);
    return this.httpClient.get<TypeRestaurant>(`${this.urlApi}/${id}`);
  }
}
