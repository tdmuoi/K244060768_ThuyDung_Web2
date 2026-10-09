import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/iProduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
    private _url: string = '/datasets/products.json';
    constructor(private http: HttpClient) { }
    getProductList(): Observable<Product[]> {
        return this.http.get<Product[]>(this._url);
    }
}
