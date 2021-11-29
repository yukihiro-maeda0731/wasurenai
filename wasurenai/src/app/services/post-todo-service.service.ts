import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class PostTodoServiceService {
  apigatewayURL: string = environment.apigatewayURL;

  constructor(private http: HttpClient) { }

  /**
   * メモ登録。
   */
   postTodo(todo: Todo): Observable<any> {
    return this.http.post(this.apigatewayURL, todo,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
      }
    })
  }
}
