import {Category} from "./Category";
import {Priority} from "./Priority";

export class Task {
  id: number;
  title: string;
  status: boolean;
  category?: Category;
  priority?: Priority;
  date?: Date;

  constructor(id: number, title: string, status: boolean,
              category?: Category, priority?: Priority, date?: Date) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.category = category;
    this.priority = priority;
    this.date = date;
  }
}
