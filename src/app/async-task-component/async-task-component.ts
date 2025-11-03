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
  // Scenario one
  count = 0;
  counter = signal(0);
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

  
  // scenario 

  data1: any = null;

  constructor(private https: HttpClient) {}

  load() {
    // This pattern relies on Zone.js to auto-run change detection.
    // In zoneless mode this will not update the view unless you call markForCheck() or use signals.
    this.https.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(res => {
      this.data1 = res;
      console.log('subscribe loaded', res);
      // In zoneless mode, view won't update automatically here.
    });
  }


  // Fifth scenario
    count = signal(0);

  increment() {
    this.count.update(c => c + 1);
  }


  // Sixth scenario
  // data2: any;

  // constructor(private cdRef: ChangeDetectorRef) {}

  // updateData(newValue: any) {
    // this.data = newValue;
    // this.cdRef.markForCheck();
    //  manually tell Angular to re-check
  // }
   data2 = signal<any>(null);

    updateData(newValue: any) {
    // Signal update automatically re-renders the template
    // Works fine with the old Change Detection (Zone.js) system.
//  But if you’re using Signals or Zone-less Angular, you need manual change detection (markForCheck()) for updates outside Angular’s context.
//  It’s imperative, verbose, and can be error-prone if you forget to trigger it.
    this.data2.set(newValue);
  }

  // Seventh scenario
  data3 = signal({ name: 'Initial Data' });

  updateData2() {
    this.data3.set({ name: 'Updated Data' });
  }


}
