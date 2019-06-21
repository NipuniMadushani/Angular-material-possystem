import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlaceOrder} from '../dto/place-order';
import {Observable} from 'rxjs';
import {MAIN_URL} from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor(private http: HttpClient) { }
  placeOrder(placeorder: PlaceOrder): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, placeorder);
  }

  getAllOrder(): Observable<Array<PlaceOrder>> {
    return this.http.get<Array<PlaceOrder>>(MAIN_URL + URL + '/');
  }
}
