import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

  private baseUri: string;

  constructor(public http: Http) {
    console.log('Hello CategoriaService Provider');
    this.baseUri = 'https://product-api-cardosao.c9users.io/api/category'
  }

   getAll() {
    return new Promise((resolve, reject)=> {
      this.http.get(this.baseUri)
      .map(res=> res.json())
      .subscribe(data=> {
        resolve(data);
      }, error => reject(error));
    });
  }

}
