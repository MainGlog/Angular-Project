import {Component} from '@angular/core';
import {TaskComponent} from '../to-do-task/task.component';
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
  onTaskEdited()
  {
    // TODO DISPLAY MODAL SOMEHOW
    this.mode = 'Edit';
    const modalBtn = document.createElement('button');
    modalBtn.setAttribute('data-bs-toggle', 'modal');
    modalBtn.setAttribute('data-bs-target', 'task-modal');
    modalBtn.click();
    modalBtn.addEventListener('click', () => {
      console.log(modalBtn)})
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

    //* If the task was returned successfully, perform the specified action
    if(task)
    {
      switch (this.mode) {
        case 'Add':
          this.addTask(event, task);
          break;
        case 'Edit':
          this.editTask(task);
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
      this.tasks.push(newTask as TaskComponent);
      form.reset();
      return newTask;
    }
    else
    {
      alert('Please enter a title for the task.');
      return;
    }
  }

  addTask(event: Event, task: TaskComponent)
  {

  }

}
