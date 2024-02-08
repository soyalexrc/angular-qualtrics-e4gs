import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-lauyout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './main-lauyout.component.html',
  styleUrl: './main-lauyout.component.scss'
})
export class MainLauyoutComponent {

}
