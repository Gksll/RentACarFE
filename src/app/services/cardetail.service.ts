import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponceModel } from '../models/listResponceModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
apiUrl='https://localhost:7166/api/Cars/getcardetails';
  constructor(private httpClient:HttpClient) { }

  getCarDetail():Observable<ListResponceModel<CarDetail>>
  {
    return this.httpClient.get<ListResponceModel<CarDetail>>(this.apiUrl);
  }
}
