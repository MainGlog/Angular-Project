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
  mode: string = '';
  onTaskEdited(task: TaskComponent)
  {
    this.mode = 'Edit';
    document.getElementById('task-modal')!.removeAttribute('hide');
  }
  onTaskDeleted(index: number)
  {
    this.tasks.splice(index, 1);
  }
  taskAction(event: Event)
  {
    const task = this.getTaskFromForm(event);

    //* If the task was returned successfully, perform the specified action
    if(task)
    {
      switch (this.mode) {
        case 'Add':
          this.addTask(event, task);
          break;

      }
    }
  }

  getTaskFromForm(event: Event)
  {
    const form = event.target as HTMLFormElement

    let task = {};
    const title = (form.elements.namedItem('task-title') as HTMLInputElement).value;
    const description = (form.elements.namedItem('task-description') as HTMLInputElement).value;
    const time = (form.elements.namedItem('task-time') as HTMLInputElement).value;

    if(title)
    {
      return {
        title: title,
        description: description,
        time: time
      } as TaskComponent
    }
    else
    {
      alert('Please enter a title for the task.');
      return;
    }



  }
  addTask(event: Event, task: TaskComponent)
  {
    event.preventDefault();
    this.tasks.push(task);

    const form = event.target as HTMLFormElement;
    form.reset();
    return;
  }


}
