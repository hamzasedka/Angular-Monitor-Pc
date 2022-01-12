import { DisqueService } from './../../Services/DisqueServices/disque.mock.service';
import { RamService } from './../../Services/RamServices/ram.mock.service';
import { CPUService } from './../../Services/CPUServices/cpu.mock.service';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { ChartsService } from 'src/app/Services/charts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-monitoring-details',
  templateUrl: './monitoring-details.component.html',
  styleUrls: ['./monitoring-details.component.css'],
})
export class MonitoringDetailsComponent implements OnInit {
  title = 'streaming-data';
  traceram$: Observable<any> = of(null);
  layout = {
    yaxis: {
      range: [0, 100],
    },
  };
  traceDisque$: Observable<any> = of(null);

  constructor(
    private cpuService: CPUService,
    private ramService: RamService,
    private disqueService: DisqueService,
    private chartService: ChartsService
  ) {}

  ngOnInit(): void {
    const triggEverySec$ = interval(1000);
    triggEverySec$.subscribe(() => {
      this.disqueService.getDisque().subscribe((data) => {
        this.traceDisque$ = this.chartService.connect(data.DisqueRate).pipe(
          map((data) => {
            return {
              ...data,
              type: 'scatter',
              name: 'DISQUE',
            };
          })
        );
      });
    });
  }
}
