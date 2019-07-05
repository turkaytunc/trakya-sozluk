import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  log(firstName) {
    console.log(firstName);
  }

  submit(f) {
    console.log(f);
    console.log('submit\'e basildi');
    console.log(f.value);
    console.log(f.value.contact.firstName);
    console.log(f.value.comment);
  }
}
