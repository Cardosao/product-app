import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import {IBaseService} from './ibase-service';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService implements IBaseService {

  baseUri: string;

  constructor(public http: Http) {
    console.log('Hello UsuarioService Provider');
    this.baseUri = "http://localhost:8080/safe-pocket/rest/usuario/";
  }

  public getAll(): Observable<any> {
    return this.http.get(this.baseUri)
      .map((res: Response) => res.json());
  }

  public getById(id: number): Observable<any> {
    return this.http.get(this.baseUri + id)
      .map((res: Response) => res.json());
  }

  public save(usuario: any) {
    // if (usuario.id == undefined) {
    //   console.log("INSERT-FRONTEND");
    //   this.insert(usuario);
    // } else {
    //   console.log("UPDATE-FRONTEND");
    //   this.update(usuario);
    // }
  }

  public insert(usuario: User): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let createUri = this.baseUri + "create";
    return this.http.post(
      createUri,
      JSON.stringify(usuario),
      { headers: headers, method: "POST" })
        .map((res: Response) => {
        return res;
      });
  }

  public create(user: User): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let createUri = this.baseUri + "create";
    return this.http.post(createUri, user, {headers: headers})
      .map((res: Response) => {
        return res.json()
      });
  }

  public update(usuario: any): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put(this.baseUri, JSON.stringify(usuario), { headers: headers })
      .map((res: Response) => res);
  }

  public detele(id: number): Observable<any> {
    return this.http.delete(this.baseUri + id)
      .map((res: Response) => res);
  }

}
