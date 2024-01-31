import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QsiService {
  $hasInterceptLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $QSI: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }

  updateInterceptState(value: boolean) {
    this.$hasInterceptLoaded.next(value);
  }

  loadQSI(qsiData: any) {
    this.$QSI.next(qsiData);
  }

  unloadQSI() {
    this.$QSI.next({})
  }

//   Getters
  get hasInterceptLoaded() {
    return this.$hasInterceptLoaded.value;
  }

  get QSI() {
    return this.$QSI.value;
  }
}
