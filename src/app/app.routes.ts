import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {GuessingGameComponent} from './guessing-game/guessing-game.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'game', component: GuessingGameComponent },
  { path: 'list', component: ToDoListComponent },
];
