import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-task',
  imports: [
    FormsModule,
  ],
  templateUrl: './to-do-task.component.html',
  standalone: true,
  styleUrl: './to-do-task.component.css'
})
export class TaskComponent {
  id: number = 0;
  @Input() title?: string;
  @Input() description?: string;
  @Input() time?: string;
  @Output() deleteTask : EventEmitter<TaskComponent> = new EventEmitter<TaskComponent>();
  @Output() taskEdited : EventEmitter<TaskComponent> = new EventEmitter<TaskComponent>();
}
