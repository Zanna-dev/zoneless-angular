import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-async-task-component',
  imports: [JsonPipe],
  templateUrl: './async-task-component.html',
  styleUrl: './async-task-component.scss',
})
export class AsyncTaskComponent {
  // Scenario two
  private http = inject(HttpClient);
  data = toSignal(this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts'));

// scenario three
  //  The $ suffix convention means "this is an Observable"
  posts$: Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/posts');


  // message = signal('Waiting for data...');
  message = signal('Waiting for data...');

  fetchData() {
    this.message.set('Loading...');
    setTimeout(() => {
      this.message.set('Data fetched successfully 🎉');
    }, 1500);
  }


}
