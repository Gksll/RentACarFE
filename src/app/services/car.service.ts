import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponceModel } from '../models/listResponceModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:7166/api/";
constructor(private httpClient:HttpClient) { }
getCar():Observable<ListResponceModel<Car>>
{
let newPath=this.apiUrl+"cars/getcars";
 return this.httpClient.get<ListResponceModel<Car>>(newPath);
}
getCarByBrand(brandId:number):Observable<ListResponceModel<Car>>
{
  let newPath=this.apiUrl+"cars/getbybrandid?brandId="+brandId;
 return this.httpClient.get<ListResponceModel<Car>>(newPath);
}
getCarByColor(colorId:number):Observable<ListResponceModel<Car>>
{
  let newPath=this.apiUrl+"cars/getbycolorid?colorId="+colorId;
 return this.httpClient.get<ListResponceModel<Car>>(newPath);
}
}
