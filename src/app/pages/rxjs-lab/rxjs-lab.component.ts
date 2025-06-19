import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rxjs-lab',
  templateUrl: './rxjs-lab.component.html',
  styleUrls: ['./rxjs-lab.component.scss'],
})
export class RxjsLabComponent {
  exercises = [
    {
      title: '🧪 防抖搜尋',
      description: '使用 debounceTime + switchMap 實作輸入搜尋功能',
      route: '/rxjs-lab/debounce',
    },
    {
      title: '🔀 mergeMap 同步請求',
      description: '模擬多個請求同時進行，處理非同步事件',
      route: '/rxjs-lab/merge-map',
    },
    {
      title: '⛓️ forkJoin 結合多請求',
      description: '等多個 Observable 結束後一次處理',
      route: '/rxjs-lab/fork-join',
    },
  ];

  constructor(private router: Router) {}

  goTo(route: string): void {
    this.router.navigate([route]);
  }
}
