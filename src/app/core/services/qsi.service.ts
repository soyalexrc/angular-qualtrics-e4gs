import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Qsi} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class QsiService {
  $hasInterceptLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $QSI: BehaviorSubject<Qsi | {}> = new BehaviorSubject<Qsi | {}>({});

  constructor() { }

  updateInterceptState(value: boolean) {
    this.$hasInterceptLoaded.next(value);
  }

  loadQSI(qsiData: Qsi) {
    this.$QSI.next(qsiData);
  }

  unloadQSI() {
    this.$QSI.next({})
  }

//   Getters
  get hasInterceptLoaded() {
    return this.$hasInterceptLoaded.value;
  }

  get QSI(): Qsi {
    return this.$QSI.value as Qsi;
  }
}
