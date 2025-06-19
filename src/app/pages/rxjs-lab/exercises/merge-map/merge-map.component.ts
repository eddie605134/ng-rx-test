import { Component, OnDestroy } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnDestroy {
  private request$ = new Subject<number>();
  responses: string[] = [];
  private counter = 1;

  constructor() {
    this.request$
      .pipe(
        tap((id) => console.log('🚀 發送請求', id)),
        mergeMap((id) => this.fakeApi(id))
      )
      .subscribe((res) => {
        this.responses.push(res);
      });
  }

  sendRequest(): void {
    this.request$.next(this.counter++);
  }

  fakeApi(id: number) {
    const delayTime = Math.floor(Math.random() * 2000) + 500;
    return of(`回應 #${id}（延遲 ${delayTime}ms）`).pipe(delay(delayTime));
  }

  ngOnDestroy(): void {
    this.request$.complete();
  }
}
