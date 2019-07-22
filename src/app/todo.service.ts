import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'},
  );
  TODO = `${URL.BASE}/todo`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.TODO);
  }

  update(todo: Todo): void {

    this.http.post(this.TODO, todo).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while updating Todo');
      }
    );
  }


  delete(id: number) {

    const url = `${this.TODO}/${id.toString()}`;
    console.log(url);
    this.http.delete(url).subscribe(
      res => {
        location.reload();
        console.log(res);
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}

export enum URL {
  BASE = 'http://localhost:8080'
}
