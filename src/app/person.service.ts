import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private BASE_URL = 'http://localhost:8080';
  private PERSON = `${this.BASE_URL}\\person`;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpService: HttpClient) {
  }

  getAll(): Observable<Person[]> {
    return this.httpService.get<Person[]>(this.PERSON);
  }

}
