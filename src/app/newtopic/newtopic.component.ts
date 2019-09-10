import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-newtopic',
  templateUrl: './newtopic.component.html',
  styleUrls: ['./newtopic.component.css']
})
export class NewtopicComponent implements OnInit {

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
      error => {
        alert('An error has occured while posting data');
      }
    );
  }
}
