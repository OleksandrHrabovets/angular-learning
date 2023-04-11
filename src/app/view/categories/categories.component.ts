import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.categories = this.dataHandlerService.getCategories();
  }

  showTasksByCategory(category: Category): Task[] {
    const tasks = this.dataHandlerService.getTasksByCategory(category);
    console.log(tasks);
    return tasks;
  }
}
