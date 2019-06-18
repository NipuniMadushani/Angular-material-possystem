import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../dto/customer';


export  const MAIN_URL = 'http://localhost:8081/';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>('http://localhost:8081/jkl/customers');
  }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8081/jkl/customers', customer);

  }

  deleteCustomer(id: number): Observable<boolean> {
    console.log('Hello');
    return this.http.delete<boolean>('http://localhost:8081/jkl/customers' + '?'  + '='  + id);
  }
}
