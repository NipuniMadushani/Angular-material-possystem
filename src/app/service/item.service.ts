import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../dto/customer';
import {Item} from '../dto/item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>('http://localhost:8081/jkl/items');
  }

  saveItem(item: Item): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8081/jkl/items', item);

  }


  deleteItem(code: number): Observable<boolean> {
    console.log(code);
    return this.http.delete<boolean>('http://localhost:8081/jkl/items?code'  + '=' + code);
  }
}
