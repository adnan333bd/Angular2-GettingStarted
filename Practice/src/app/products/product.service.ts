import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

    constructor(private _http: HttpClient) {
    }
    private _productUrl = './api/products/products.json';
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse) {
        console.log(err);
        return Observable.throw(err.message);
    }
}