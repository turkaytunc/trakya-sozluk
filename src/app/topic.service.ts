import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Topic} from './topics/model/topic';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private BASE_URL = 'http://localhost:8080';
  private ALL_TOPICS = `${this.BASE_URL}\\topics`;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpService: HttpClient) {
  }

  getAll(): Observable<Topic[]> {
    /**return this.httpService.get(this.ALL_TOPICS).pipe(
     map(data => data as Topic[])
     );
     */
    return this.httpService.get<Topic[]>(this.ALL_TOPICS);
  }


}
