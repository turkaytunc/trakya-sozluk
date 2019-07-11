import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from './model/topic';
import {TopicService} from '../topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[];

  constructor(private userService: TopicService) {
  }

  ngOnInit() {
    this.getAllTopics();
  }

  public getAllTopics() {
    this.userService.getAll()
      .subscribe(data => {
        this.topics = data;
      });
  }


}
