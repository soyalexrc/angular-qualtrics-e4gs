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

  updateScriptValues(objStringEncoded: string) {
    const newValues = {
      value: objStringEncoded,
    };

    window.parent.postMessage({
      method: 'UPDATE_Q_EED',
      values: newValues
    }, '*'); // Adjust origin as needed
  }

//   Getters
  get hasInterceptLoaded() {
    return this.$hasInterceptLoaded.value;
  }

  get QSI(): Qsi {
    return this.$QSI.value as Qsi;
  }
}
