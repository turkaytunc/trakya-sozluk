import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../feedback/feedback.component';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[] = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAllTopics();
    console.log(this.topics);
  }

  public getAllTopics() {
    let status;
    const url = 'http://localhost:8080/topics';
    this.http.get<Topic[]>(url).subscribe(
      res => {
        this.topics = res;
        status = true;
        return status;
      },
      err => {
      }
    );
  }

}
