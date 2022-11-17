import { Injectable } from '@angular/core';
import { Laptop } from './laptop';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private baseUrl="http://localhost:8080/api/vi/laptop";  
  constructor(private httpClient:HttpClient) { }

  add(laptop:Laptop):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,laptop);
  }
  getValues():Observable<Laptop[]>{
    return this.httpClient.get<Laptop[]>(`${this.baseUrl}`);
  }
  getById(id:number):Observable<Laptop>{
    return this.httpClient.get<Laptop>(`${this.baseUrl}/${id}`);
  }
  putvalues(id:number,laptop:Laptop):Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`,laptop);
  }
  deleteById(id:number):Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  updateById(id:number, laptop:Laptop):Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`,laptop)
  }

}
