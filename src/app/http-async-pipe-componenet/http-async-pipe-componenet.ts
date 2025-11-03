import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Component, createComponent, inject, Injector } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-http-async-pipe-componenet',
  imports: [JsonPipe,AsyncPipe],
  templateUrl: './http-async-pipe-componenet.html',
  styleUrl: './http-async-pipe-componenet.scss',
})
export class HttpAsyncPipeComponenet {
// scenario 3
  constructor(private http: HttpClient, private injector: Injector, private appRef: ApplicationRef) { }

  posts$ = inject(HttpClient).get('https://jsonplaceholder.typicode.com/posts');
  postsSignal = toSignal(this.posts$, { initialValue: [] as any[] });

  


  refresh() {
    // toSignal subscribes automatically; we reassign by creating a new Observable for demo
    this.posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
    // Optionally convert again:
    // this.postsSignal = toSignal(this.posts$ as any);
  }

  // scenario 7
   private compRef: any;
  // create() {
  //   this.compRef = createComponent(DynamicChildInput, { injector: this.injector });
  //   this.appRef.attachView(this.compRef.hostView);
  //   document.getElementById('dyn-placeholder')?.appendChild(this.compRef.location.nativeElement);
  //   // initial setInput:
  //   this.compRef.setInput('data', 'created at ' + new Date().toLocaleTimeString());
  // }

  update() {
    if (this.compRef) {
      this.compRef.setInput('data', 'updated at ' + new Date().toLocaleTimeString());
      // Angular will schedule change detection for this input update even in zoneless mode
    }
  }

}
