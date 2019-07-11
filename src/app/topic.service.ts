import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Topic} from './topics/model/topic';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private BASE_URL = 'http://localhost:8080';
  private ALL_TOPICS = `${this.BASE_URL}\\topics`;


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Topic[]> {
    // @ts-ignore
    return this.http.get(this.ALL_TOPICS);
  }

}
