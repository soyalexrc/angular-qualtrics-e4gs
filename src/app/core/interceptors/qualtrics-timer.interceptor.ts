import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import {filter, Observable, Subscription, timer} from 'rxjs';
import {QualtricsTimerService} from "../services/qualtrics-timer.service";

@Injectable()
export class QualtricsTimerInterceptor implements HttpInterceptor {
  private timerSubscription: Subscription | null = null;
  conditionToKillTheLoop = false;

  constructor(private router: Router, private timerService: QualtricsTimerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Refresh timer on routing events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.startTimer());

    this.startTimer(); // Start timer initially

    return next.handle(req);
  }

  private startTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timerSubscription = timer(45000).subscribe(() => {
      // Your code to run after 45 seconds
      console.log('here');
      // Check for scenario to kill the loop
      if (this.conditionToKillTheLoop) {
        this.killTimer();
      } else {
        this.startTimer(); // Restart the timer
      }
    });
  }

  killTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }
}
