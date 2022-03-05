import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponceModel } from '../models/listResponceModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:7166/api/colors/getall";
  
  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ListResponceModel<Color>>
  {
   return this.httpClient.get<ListResponceModel<Color>>(this.apiUrl);
  }
}
