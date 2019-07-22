import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  PERSON = `${URL.BASE}\\person`;

  constructor(private httpService: HttpClient) {
  }

  getAll(): Observable<Person[]> {
    return this.httpService.get<Person[]>(this.PERSON);
  }

}

export enum URL {
  BASE = 'http://localhost:8080'

}
