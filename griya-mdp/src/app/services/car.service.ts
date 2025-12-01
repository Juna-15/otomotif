import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../lokasi-mobil/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService { 
  private apiUrl = 'http://localhost:3000/cars'; 
  
  constructor(private http: HttpClient) {}
  
  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
  
  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }
  
  filterCarByType(type: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}?type=${type}`);
  }
}