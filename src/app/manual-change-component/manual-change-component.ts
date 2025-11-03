import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-manual-change-component',
  imports: [],
  templateUrl: './manual-change-component.html',
  styleUrl: './manual-change-component.scss',
})
export class ManualChangeComponent {
  // Scenario four
  countRaw = 0;
  countSignal = signal(0);
  private rawId: any;
  private sigId: any;

  startRaw() {
    clearInterval(this.rawId);
    this.rawId = setInterval(() => {
      this.countRaw++;
      // In zoneless mode this will NOT update view automatically.
    }, 1000);
  }

  startSignal() {
    clearInterval(this.sigId);
    this.countSignal.set(0);
    this.sigId = setInterval(() => {
      this.countSignal.update(n => n + 1); // view updates
    }, 1000);
  }


}
