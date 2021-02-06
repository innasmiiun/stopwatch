import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayTimer: string | undefined;
  isRunning: boolean = false;
  startText = 'Start';
  time: number | undefined;

  ngOnInit(): void {
    this.time = 0;
    this.displayTimer = ' 00' + ':' + '00' + ':' + '00';
  }

  toggleTimer() {
    if (!this.isRunning) {
      this.isRunning = !this.isRunning;
      this.stopwatch();
    } else {
      this.isRunning = !this.isRunning;
      this.time = 0;
      this.displayTimer = ' 00' + ':' + '00' + ':' + '00';
    }
  }

  stopwatch() {
    timer(0, 1000).subscribe(() => {
      if (this.isRunning) {
        // @ts-ignore
        this.time++;
        this.getDisplayTimer(this.time);
        this.startText = 'Stop';
      } else {
        this.startText = 'Start';
      }
    });
  }
  resetTimer() {
    this.time = 0;
  }

  pauseTimer() {
      this.isRunning = !this.isRunning;
  }

  getDisplayTimer(time: any) {
    let hours = String(Math.floor(time / 3600));
    let minutes = String(Math.floor((time % 3600) / 60));
    let seconds = String(Math.floor((time % 3600) % 60));

    if (Number(hours) < 10) {
      hours = '0' + hours;
    } else {
      hours = '' + hours;
    }
    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    } else {
      minutes = '' + minutes;
    }
    if (Number(seconds) < 10) {
      seconds = '0' + seconds;
    } else {
      seconds = '' + seconds;
    }

    this.displayTimer = hours + ':' + minutes + ':' + seconds;
  }
}
