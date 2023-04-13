import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input()
  categories: Category[] = [];
  selectedCategory: Category | undefined;

  constructor() {
  }

  ngOnInit(): void {
    // this.dataHandlerService.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    // this.selectedCategory = category;
    // this.dataHandlerService.getTasksByCategory(category);
  }
}
