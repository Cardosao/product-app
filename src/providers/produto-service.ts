import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoService {

  private baseUri: string;

  constructor(public http: Http) {
    console.log('Hello ProdutoService Provider');
    this.baseUri = 'https://product-api-cardosao.c9users.io/api/product';
  }

  public getAll() : Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get(this.baseUri)
          .map(res => res.json())
          .subscribe((data) => {
            resolve(data);
          }, (error) => reject(error));
    });
  }

  public remove(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUri + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  public insert(product: any): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUri, JSON.stringify(product), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          console.log(data);
        }, error => {
          reject(error);
        });
    });
  }

  public update(product: any): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.put(this.baseUri, JSON.stringify(product), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
