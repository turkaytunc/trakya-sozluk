import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model: Topic = {
    id: '',
    name: '',
    description: ''
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  submit(f): void {
    const url = 'http://localhost:8080/topics';
    this.http.post(url, f.value).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending feedback');
      }
    );
    console.log(f.value);
  }

}

export interface Topic {
  id: string;
  name: string;
  description: string;
}
