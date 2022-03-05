import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponceModel } from '../models/listResponceModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:7166/api/rentals/getrentals";
  constructor(private httpClient:HttpClient) { }
  getRental():Observable<ListResponceModel<Rental>>
{
 return this.httpClient.get<ListResponceModel<Rental>>(this.apiUrl);
}
}
