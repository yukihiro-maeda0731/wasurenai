import { TestBed } from '@angular/core/testing';

import { PostTodoServiceService } from './post-todo-service.service';

describe('PostTodoServiceService', () => {
  let service: PostTodoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTodoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
