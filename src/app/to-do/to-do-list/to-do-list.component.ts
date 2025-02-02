import { Component } from '@angular/core';
import {TaskComponent} from '../to-do-task/task.component';
import {Task} from '../task';
import {Actions} from '../actions';
@Component({
  selector: 'app-to-do',
  imports: [
    TaskComponent
  ],
  templateUrl: './to-do-list.component.html',
  standalone: true,
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

  protected readonly Actions = Actions;
}
