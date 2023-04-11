import {Injectable} from '@angular/core';
import {TestData} from "../data/TestData";
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  categoriesSubject = new Subject<Category[]>();
  tasksSubject = new Subject<Task[]>();

  constructor() {
  }

  getCategories() {
    this.categoriesSubject.next(TestData.categories);
  }

  getTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  getTasksByCategory(category: Category) {
    this.tasksSubject.next(TestData.tasks.filter(task => task.category === category));
  }
}
