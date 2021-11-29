import { Component, OnInit } from '@angular/core';
import { PostTodoServiceService } from '../services/post-todo-service.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public inputJP: String = '';
  todos: Todo[] = [];
  todo: Todo = {
    id: '',
    todo: ''
  };

  constructor(private service: PostTodoServiceService) { }

  ngOnInit(): void {
  }

  postTodo(){
    this.todo.todo = this.inputJP;
    this.service.postTodo(this.todo)
    .subscribe(
      data => {
        this.todos = data
      }
    );
    alert('登録しました');
    // this.getMemos(this.currentPage);
  }

}
