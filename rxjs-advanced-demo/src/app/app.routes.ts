import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RxjsLabComponent } from './pages/rxjs-lab/rxjs-lab.component';

import { DebounceSearchComponent } from './pages/rxjs-lab/exercises/debounce-search/debounce-search.component';
import { MergeMapComponent } from './pages/rxjs-lab/exercises/merge-map/merge-map.component';
import { ForkJoinComponent } from './pages/rxjs-lab/exercises/fork-join/fork-join.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'rxjs-lab',
    children: [
      { path: '', component: RxjsLabComponent },
      { path: 'debounce', component: DebounceSearchComponent },
      { path: 'merge-map', component: MergeMapComponent },
      { path: 'fork-join', component: ForkJoinComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];
