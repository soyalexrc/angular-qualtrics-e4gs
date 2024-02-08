import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {QsiService} from "./core/services/qsi.service";
import {QualtricsTimerService} from "./core/services/qualtrics-timer.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {


  private qsi = inject(QsiService);
  private qualtricsTimerService = inject(QualtricsTimerService);

  isTimerRunning$ = this.qualtricsTimerService.timerRunning$;


  ngOnInit() {
    this.runTimer();

    window.addEventListener('qsi_js_loaded', (e: any) => {
      console.log(e.currentTarget.QSI);
      if (e.currentTarget.QSI) {
        this.qsi.loadQSI(e.currentTarget.QSI);
        this.qsi.updateInterceptState(true)
      } else {
        this.qsi.unloadQSI();
        this.qsi.updateInterceptState(false)
      }
    })
  }

  ngOnDestroy() {
    window.removeEventListener('qsi_js_loaded', () => {
      this.qsi.unloadQSI();
      this.qsi.updateInterceptState(false);
    });
  }

  runTimer() {
    this.qualtricsTimerService.handleRoutingEvents();

    // Example code to run every 45 seconds
    const codeToRun = () => {
      console.log('Timer fired!');
    };

    this.qualtricsTimerService.startTimer(codeToRun);
  }

}
