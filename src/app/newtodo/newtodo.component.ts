import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  submit(f): void {
    const url = 'http://89.40.125.228:8080/todo';
    this.http.post(url, f.value).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occured while sending feedback');
      }
    );
  }
}
