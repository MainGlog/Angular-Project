import { Task } from './task';
import {Component, EventEmitter, Output} from '@angular/core';
@Component({
  template: ``,
  standalone: true
})

export class Actions
{
  @Output() newTaskCreated : EventEmitter<Task> = new EventEmitter<Task>();
  removeTask()
  {

  }
  editTask(event: Event)
  {
    const newTask: Task | undefined  = this.validateTask(event.target as HTMLFormElement);

    event.preventDefault();
    this.newTaskCreated.emit(newTask);
  }

  private validateTask(form: HTMLFormElement)
  {
    const title = (form.elements.namedItem('task-title') as HTMLInputElement).value;
    const description = (form.elements.namedItem('task-description') as HTMLInputElement).value;
    const time = Number((form.elements.namedItem('task-time') as HTMLInputElement).value);

    if(title)
    {
      //! Potential logic error here
       return {
        title: title,
        description: description,
        time: time
      } as Task;
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

    /* TODO Figure out how to render the form in such a way that allows you to see add or edit at the appropriate times
    *  The existing form is in task.component.html
    *
    *
    *
    * */
    event.preventDefault();

    const newTask: Task | undefined  = this.validateTask(event.target as HTMLFormElement);
    if(newTask)
    {
      return newTask;
    }
    return;
  }
}
