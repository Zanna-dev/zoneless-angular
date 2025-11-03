import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-http-async-pipe-componenet',
  imports: [JsonPipe,AsyncPipe],
  templateUrl: './http-async-pipe-componenet.html',
  styleUrl: './http-async-pipe-componenet.scss',
})
export class HttpAsyncPipeComponenet {

  constructor(private http: HttpClient) { }

  posts$ = inject(HttpClient).get('https://jsonplaceholder.typicode.com/posts');
  postsSignal = toSignal(this.posts$, { initialValue: [] as any[] });

  


  refresh() {
    // toSignal subscribes automatically; we reassign by creating a new Observable for demo
    this.posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
    // Optionally convert again:
    // this.postsSignal = toSignal(this.posts$ as any);
  }

}
