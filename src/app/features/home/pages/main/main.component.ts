import {Component, inject, OnInit, signal} from '@angular/core';
import {QsiService} from "../../../../core/services/qsi.service";

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private qsi = inject(QsiService);

  ngOnInit() {
    this.qsi.$QSI.subscribe(res => {
      if (Object.keys(res).length > 0) {
        console.log(this.qsi.QSI);
        // this.qsi.QSI.load();
      }
    })

  }

  runIntercept() {
    if (this.qsi.hasInterceptLoaded) {
      this.qsi.QSI.API.run()
    }
  }

  handleClick() {
    if (this.qsi.hasInterceptLoaded) {
      this.qsi.QSI.API.unload();
      this.qsi.QSI.API.load().done(this.runIntercept());
    }
  }
}
