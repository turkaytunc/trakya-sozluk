import {Component, OnInit} from '@angular/core';
import {Person} from './model/person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person[];
  header = ['#', 'Id', 'Firstname', 'Lastname','Date'];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getAllPerson();
  }

  public getAllPerson() {
    this.personService.getAll()
      .subscribe(data => {
        this.person = data;
        console.log(data);
      });
  }


}
