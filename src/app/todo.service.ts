import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  PERSON = `${URL.BASE}\\todo`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.PERSON);
  }

}

export enum URL {
  BASE = 'http://localhost:8080'
}
