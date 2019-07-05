import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  firstName: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.firstName);
  }

  log(firstName) {
    console.log(firstName);
  }
}
