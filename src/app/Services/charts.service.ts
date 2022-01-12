import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  _x: number[] = [];
  _y: number[] = [];
  _iter = 0;
  data$: Observable<{ x: number[]; y: number[] } | null> = of(null);

  constructor() {}

  connect(data: any) {
    // Connect to a websocket that regularly pushes data.
    // Reformat to x/y data to plot.
    this.data$ = interval(100).pipe(
      map(() => {
        // We will show the 20 most recent values
        this._x.push(this._iter);
        this._iter = this._iter + 1;

        this._y.push(data); // Random data
        if (this._y.length > 20) {
          this._x = this._x.slice(1, -1);
          this._y = this._y.slice(1, -1);
        }
        return {
          x: this._x,
          y: this._y,
        };
      })
    );

    return this.data$;
  }
}
