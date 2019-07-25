import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from './model/Todo';
import {Self} from './model/Self';
import {of} from 'rxjs';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[];
  self: Self[] = new Array();

  constructor(private service: TodoService) {
  }

  ngOnInit() {
    this.getAllTodos();
    console.log(this.self);
  }

  private getAllTodos() {
    this.service.getAll()
      .subscribe(data => {
        this.todo = data;
        for (const obj of data) {
          this.self.push(obj._links.self);
        }
      });
  }

  private update(id: number) {
    const str = window.prompt();
    let todo = new Todo();
    todo.setDescription(str);
    todo.setDone(false);
    console.log(todo);
    this.service.update(todo, id);
  }

  private delete(id: number) {
    console.log('test');
    this.service.delete(id);
  }

}
