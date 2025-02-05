import {Component} from '@angular/core';
import {TaskComponent} from '../to-do-task/to-do-task.component';
import {FormsModule} from '@angular/forms';
import {Modal} from 'bootstrap';
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
  mode: string = '';
  onTaskEdited(task: TaskComponent)
  {
    this.mode = 'Edit';
    const modalElement = document.getElementById('task-modal');
    const modal = Modal.getOrCreateInstance(modalElement!);
    modal.toggle();

    console.log(task);
    const title = document.getElementById('task-title') as HTMLInputElement;
    title!.value = <string>task.title;

    const description = document.getElementById('task-description') as HTMLInputElement;
    if(task.description)
    {
      description.value = <string>task.title;
    }

    const time = document.getElementById('task-time') as HTMLInputElement;
    if(task.time)
    {
      time.value = <string>task.time
    }
  }
  editTask(task: TaskComponent)
  {
    this.tasks.splice(task.id, 1, task);
  }
  onTaskDeleted(index: number)
  {
    this.tasks.splice(index, 1);
  }
  taskAction(event: Event)
  {
    const task = this.getTaskFromForm(event) as TaskComponent;
    console.log(task);
    //* If the task was returned successfully, perform the specified action
    if(task)
    {
      switch (this.mode) {
        case 'Add':
          this.addTask(task);
          const form = event.target as HTMLFormElement;
          form.reset();
          break;
        case 'Edit':
          this.editTask(task);
          break;
      }
    }
  }

  getTaskFromForm(event: Event)
  {
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
      } as TaskComponent
      return newTask;
    }
    else
    {
      alert('Please enter a title for the task.');
      return;
    }
  }

  addTask(task: TaskComponent)
  {
    this.tasks = [...this.tasks, task];
    console.log(this.tasks);
  }
}
