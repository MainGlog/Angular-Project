import {Component} from '@angular/core';
import {TaskComponent} from '../to-do-task/task.component';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-to-do',
  imports: [
    TaskComponent,
    FormsModule
  ],
  templateUrl: './to-do-list.component.html',
  standalone: true,
  styleUrl: './to-do-list.component.css'
})

export class ToDoListComponent {
  tasks: TaskComponent[] = [];
  onTaskEdited(task: TaskComponent, index: number)
  {
    this.tasks.splice(index, 1, task);
  }
  onTaskDeleted(index: number)
  {
    this.tasks.splice(index, 1);
  }
  addTask(event: Event)
  {
    event.preventDefault();

    const form = event.target as HTMLFormElement

    let newTask = {};
    const title = (form.elements.namedItem('task-title') as HTMLInputElement).value;
    const description = (form.elements.namedItem('task-description') as HTMLInputElement).value;
    const time = (form.elements.namedItem('task-time') as HTMLInputElement).value;

    if(title)
    {
      newTask = {
        title: title,
        description: description,
        time: time
      }
      this.tasks.push(newTask as TaskComponent);
      form.reset();
      return;
    }
    else
    {
      alert('Please enter a title for the task.');
      return;
    }
  }

  editTask(event: Event)
  {

  }
}
