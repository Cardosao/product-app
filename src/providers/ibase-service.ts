import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IBaseService {

  baseUri?: string;

  getAll(): Observable<any>;

  getById(id: number): Observable<any>;

  /**
  Metodo POST para insert
  @param {any} value objeto a ser inserido.
  */
  insert(object: any): Observable<any>;

  create(object: any): Observable<any>;

  update(object: any): Observable<any>;

  detele(id: number): Observable<any>;

}
