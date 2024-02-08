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
    setTimeout(() => {
      this.handleLoadParametersForSurvey();
    }, 5000)
  }

  runIntercept() {
    if (this.qsi.hasInterceptLoaded) {
      this.qsi.QSI.API.run();
      try {
        this.qsi.QSI.API.getIntercept('ZN_aaxt7pZtTL1fNzw').then((interceptAPI) => {
          console.log(interceptAPI);
          const evaluationResult = interceptAPI.getEvaluationResult();
          console.log(evaluationResult);
          if(evaluationResult.passed) {
            interceptAPI.onClose(function() {
              console.log('intercept closed!');
            });
          } else {
            console.log('intercept did not pass!')
          }
        })
      } catch (err) {
        console.log(err);
      }

    }
  }

  handleClick() {
    if (this.qsi.hasInterceptLoaded) {
      this.qsi.QSI.API.unload();
      this.qsi.QSI.API.load();
      this.runIntercept();
    }
  }

  handleLoadParametersForSurvey() {
    const parameters= {
      "ID_INTERCEPT": "",
      "BAN": "11223344",
      "ACCOUNT_TYPE": "I3",
      "PRODUCT_TYPE": "G",
      "SUBSCRIBER_NO": "78760334462",
      "USER_ID": "1235",
      "USER_NAME": "lrodriguez",
      "EMAIL": "lrodriguez@e4gs.com",
      "FLAG": "/recharge"
    };
    const parametersString = btoa(JSON.stringify(parameters));
    this.qsi.updateScriptValues(parametersString)
  }
}
