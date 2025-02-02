import {BootstrapOptions, Component, EventEmitter, Output} from '@angular/core';
import {TaskComponent} from '../to-do-task/task.component';
import {Task} from '../task';
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

  editTask(event: Event)
  {
    const newTask: Task | undefined  = this.validateTask(event.target as HTMLFormElement);

    event.preventDefault();
  }

  onTaskDeleted(task: TaskComponent)
  {
    console.log(task);
    const index = this.tasks.findIndex((i) => i.id = task.id);
    console.log(index);
    this.tasks.splice(index, 1);

  }
  private validateTask(form: HTMLFormElement)
  {
    // TODO
    //! Form elements is undefined
    //! This is because when it is called by addTask, there is no form.
    const title = (form.elements.namedItem('task-title') as HTMLInputElement).value;
    const description = (form.elements.namedItem('task-description') as HTMLInputElement).value;
    const time = (form.elements.namedItem('task-time') as HTMLInputElement).value;

    if(title)
    {
      //! Potential logic error here
      return {
        title: title,
        description: description,
        time: time
      }
    }
    else
    {
      alert('Please enter a title for the task.');
      return;
    }
  }
  addTask(event: Event)
  {
    // / Create new task component
    event.preventDefault();

    const form = event.target as HTMLFormElement

    const newTask: any = this.validateTask(form);
    if(newTask)
    {
      this.tasks.push(newTask);
    }
    form.reset();
    console.log(this.tasks);
    return;
  }
}
