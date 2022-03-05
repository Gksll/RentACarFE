import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  currentCar:Car={brandName:'',carId:0,carName:'',colorName:'',dailyPrice:0,description:'',modelYear:0,brandId:0,colorId:0}
  dataLoaded = false;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {

        this.getCarsByBrands(params['brandId']);

      }
        else if(params['colorId']){

          this.getCarsByColors(params['colorId']);

        }
       else {
        this.getCars();
      }
    });
  }
  getCars() {
    this.carService.getCar().subscribe((responce) => {
      this.cars = responce.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrands(brandId: number) {
    this.carService.getCarByBrand(brandId).subscribe((responce) => {
      this.cars = responce.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColors(colorId: number) {
    this.carService.getCarByColor(colorId).subscribe((responce) => {
      this.cars = responce.data;
      this.dataLoaded = true;
    });
  }
  setCurrentCar(car:Car){
this.currentCar=car
  }
  getCurrentCar(car:Car){
    if(this.currentCar==car){
      return 'list-group-item active'
    }
    else{
      return 'list-group-item'
    }
  }
}
