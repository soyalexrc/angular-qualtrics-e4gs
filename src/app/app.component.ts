import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {QsiService} from "./core/services/qsi.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private qsi = inject(QsiService);

  ngOnInit() {
    window.addEventListener('qsi_js_loaded', (e: any) => {
      // console.log(e.currentTarget.QSI);
      if (e.currentTarget.QSI) {
        this.qsi.loadQSI(e.currentTarget.QSI);
        console.log(this.qsi.QSI);
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

}
