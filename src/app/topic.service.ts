import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private BASE_URL = 'http://localhost:8080';
  private ALL_TOPICS = `${this.BASE_URL}\\topics`;


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.ALL_TOPICS);
  }

}
