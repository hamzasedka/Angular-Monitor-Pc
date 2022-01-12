import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChartsService } from 'src/app/Services/charts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ram-chart',
  templateUrl: './ram-chart.component.html',
  styleUrls: ['./ram-chart.component.css'],
})
export class RamChartComponent implements OnInit {
  @Input() RamPercentage: any;
  title = 'streaming-data';

  trace$: Observable<any> = of(null);
  layout = {
    yaxis: {
      range: [0, 5],
    },
  };

  constructor(private chartService: ChartsService) {}

  ngOnInit() {
    console.log(this.RamPercentage);

    /* this.trace$ = this.chartService.connect().pipe(
      map((data) => {
        return {
          ...data,
          type: 'scatter',
        };
      })
    );*/
  }
}
