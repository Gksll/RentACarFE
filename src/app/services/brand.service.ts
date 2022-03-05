import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponceModel } from '../models/listResponceModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:7166/api/brands/getall";
  
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<ListResponceModel<Brand>>
  {
   return this.httpClient.get<ListResponceModel<Brand>>(this.apiUrl);
  }
}
