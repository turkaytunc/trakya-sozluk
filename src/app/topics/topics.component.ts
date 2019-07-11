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

  private topics: Topic[] = [];

  constructor(private service: TopicService) {
  }

  ngOnInit() {
    this.getAllTopics();
    console.log(this.topics);
  }

  public getAllTopics(): void {
    this.service.getAll().subscribe(
      res => {
        res.forEach(item => {
          // @ts-ignore
          console.log(item);
          // @ts-ignore
          this.topics.push(new Topic({
            id: item.id,
            name: item.name,
            description: item.description
          }));

        });
      },
      err => {
      }
    );
  }

}
