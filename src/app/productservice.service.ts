import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private _http:HttpClient) { }

  fetchProductList():Observable<any>{
    return this._http.get<any>("https://restcountries.eu/rest/v2/all");
  }
}
