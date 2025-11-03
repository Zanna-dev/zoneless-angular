import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter-component/counter-component';
import { AsyncTaskComponent } from './async-task-component/async-task-component';
import { ManualChangeComponent } from './manual-change-component/manual-change-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, AsyncTaskComponent, ManualChangeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('zoneless-angular');
}
