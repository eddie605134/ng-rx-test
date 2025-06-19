import { Component, OnDestroy } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent implements OnDestroy {
  private search$ = new Subject<string>();
  searchResults: string[] = [];

  constructor() {
    this.search$
      .pipe(
        debounceTime(500),
        tap((kw) => console.log('🔍 搜尋：', kw)),
        switchMap((keyword) => this.fakeApi(keyword))
      )
      .subscribe((results) => {
        this.searchResults = results;
      });
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search$.next(input.value);
  }

  fakeApi(keyword: string) {
    const allItems = ['apple', 'banana', 'cherry', 'date', 'eggplant', 'fig', 'grape'];
    const filtered = allItems.filter((item) =>
      item.toLowerCase().includes(keyword.toLowerCase())
    );
    return of(filtered);
  }

  ngOnDestroy(): void {
    this.search$.complete();
  }
}
