import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { Tasks } from '../../mock-tasks';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = Tasks;

  constructor() { }

  ngOnInit(): void {
  }

}
