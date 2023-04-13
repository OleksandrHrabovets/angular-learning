import {Component, Input, OnInit} from '@angular/core';
import {Task} from 'src/app/model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input()
  tasks: Task[] = [];

  constructor() {
  }

  ngOnInit(): void {
    // this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

  toggleStatus(task: Task) {
    task.status = !task.status;
  }
}
