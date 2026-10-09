import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

export interface CustomerGroup {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: Customer[];
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _url: string = 'assets/data/customers.json';

  constructor(private http: HttpClient) { }

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>(this._url);
  }
}
