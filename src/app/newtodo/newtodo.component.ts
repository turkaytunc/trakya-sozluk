import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  meth = [
    {id: 1, status: '1'},
    {id: 2, status: '2'}
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  submit(f): void {
    const url = 'http://localhost:8080/todo';
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
