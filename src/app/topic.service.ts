import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Topic} from './feedback/feedback.component';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Topic} from './topics/model/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private BASE_URL = 'http://localhost:8080';
  private ALL_TOPICS = `${this.BASE_URL}\\topics`;

  topicsChanged = new Subject<Topic[]>();

  constructor(private http: HttpClient) {
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.ALL_TOPICS)
      .pipe(
        map(
          (data: Topic[]) => data.map(event => {
            return new Topic(data.id, data.name, data.description);
          })
        )
      );

  }


}
