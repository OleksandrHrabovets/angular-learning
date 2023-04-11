import {Injectable} from '@angular/core';
import {TestData} from "../data/TestData";
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);

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
