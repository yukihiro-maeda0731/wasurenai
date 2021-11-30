import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class PostTodoServiceService {
  apigatewayURL: string = environment.apigatewayURL;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  /**
   * メモ登録。
   */
   postTodo(todo: Todo): Observable<any> {
    return this.http.post(this.apigatewayURL,JSON.stringify(todo), this.httpOptions)
  }
}
