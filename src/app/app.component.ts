import {Component, OnInit} from '@angular/core';
import {Task} from "./model/Task";
import {Category} from "./model/Category";
import {DataHandlerService} from "./service/data-handler.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  tasks: Task[] = [];
  categories: Category[] = [];

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandlerService.getCategories().subscribe(categories => this.categories = categories);
    this.dataHandlerService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}
