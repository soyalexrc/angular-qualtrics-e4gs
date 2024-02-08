import { Routes } from '@angular/router';
import {MainLauyoutComponent} from "./core/layout/main-lauyout/main-lauyout.component";

export const routes: Routes = [
  {
    path: '',
    component: MainLauyoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/pages/main/main.component').then(m => m.MainComponent)
      },
      {
        path: 'page-2',
        loadComponent: () => import('./features/home/pages/page-2/page-2.component').then(m => m.Page2Component)
      },
      {
        path: 'page-3',
        loadComponent: () => import('./features/home/pages/page-3/page-3.component').then(m => m.Page3Component)
      },
    ]
  },
  { path: '**', redirectTo: '' },
];
