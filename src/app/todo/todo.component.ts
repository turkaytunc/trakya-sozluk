import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from './model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[];

  constructor(private service: TodoService) {
  }

  ngOnInit() {
    this.getAllTodos();
  }

  private getAllTodos() {
    this.service.getAll()
      .subscribe(data => {
        this.todo = data;
        console.log(data);
      });
  }

}
