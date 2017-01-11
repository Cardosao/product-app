import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

  private baseUri: string;

  constructor(public http: Http) {
    console.log('Hello CategoriaService Provider');
    this.baseUri = 'https://product-api-cardosao.c9users.io/api/category/'
  }

  // public getAll(): Observable<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(this.baseUri)
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         resolve(data);
  //       }, error => reject(error));
  //   });
  // }

  //Usando o padrão observable
  public getAll(): Observable<any> {
    return this.http.get(this.baseUri)
      .map(res => res.json());
  };


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

  public insert(category: any): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUri, JSON.stringify(category), { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          console.log(data);
        }, error => {
          reject(error);
        });
    });
  }

  public update(category: any): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.put(this.baseUri, JSON.stringify(category), { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
