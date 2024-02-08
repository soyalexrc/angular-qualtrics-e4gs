import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, Subscription, timer} from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QualtricsTimerService {
  private _timerSubscription: Subscription | null = null;
  private _timerRunningSubject = new BehaviorSubject<boolean>(false);
  private _killConditionMet = false;

  timerRunning$ = this._timerRunningSubject.asObservable(); // Expose for subscriber access

  constructor(private router: Router) {}

  startTimer(codeToRun: () => void): void {
    if (this._timerSubscription) {
      this._timerSubscription.unsubscribe();
    }

    this._timerSubscription = timer(10000).pipe(
      tap(() => {
          this._killConditionMet = true;
          this._timerSubscription?.unsubscribe();
          this._timerRunningSubject.next(false);
          codeToRun();
      })
    ).subscribe();

    this._timerRunningSubject.next(true); // Update immediately on start
  }

  public killTimer(): void {
    if (this._timerSubscription) {
      this._timerSubscription.unsubscribe();
      this._killConditionMet = true;
      this._timerRunningSubject.next(false);
    }
  }

  public handleRoutingEvents(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap(() => {
          if (this._timerRunningSubject.value) {
            this.killTimer();
            this.startTimer( () => console.log('timer ends')); // Restart on navigation if running
          }
        })
      )
      .subscribe();
  }
}
