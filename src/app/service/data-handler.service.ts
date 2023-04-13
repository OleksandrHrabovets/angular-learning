import {Injectable} from '@angular/core';
import {TestData} from "../data/TestData";
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  constructor() {
  }

  getCategories(): Observable<Category[]> {
    return of(TestData.categories);
  }

  getTasks(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getTasksByCategory(category: Category) {
    // this.tasksSubject.next(TestData.tasks.filter(task => task.category === category));
  }
}
