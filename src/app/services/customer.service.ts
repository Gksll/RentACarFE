import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponceModel } from '../models/listResponceModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:7166/api/Customers/getall";
  constructor(private httpClient:HttpClient) { }
  getCustomer():Observable<ListResponceModel<Customer>>
  {
   return this.httpClient.get<ListResponceModel<Customer>>(this.apiUrl);
  }
}
