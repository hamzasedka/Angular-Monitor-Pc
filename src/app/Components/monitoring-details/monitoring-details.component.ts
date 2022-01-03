import { CPU } from './../../Model/CPU';
import { Disque } from './../../Model/Disque';
import { DisqueService } from './../../Services/DisqueServices/disque.mock.service';
import { RamService } from './../../Services/RamServices/ram.mock.service';
import { CPUService } from './../../Services/CPUServices/cpu.mock.service';
import { Component, OnInit } from '@angular/core';
import { Ram } from 'src/app/Model/Ram';

@Component({
  selector: 'app-monitoring-details',
  templateUrl: './monitoring-details.component.html',
  styleUrls: ['./monitoring-details.component.css'],
})
export class MonitoringDetailsComponent implements OnInit {
  DataArray = [];
  disque: Disque = {
    DisqueName: '',
    DisqueImage: '',
    DisqueRate: 0,
    MaxCapacity: 0,
  };

  ram: Ram = {
    RamName: '',
    RamImage: '',
    RamRate: 0,
    MaxCapacity: 0,
  };
  cpu: CPU = {
    CpuName: '',
    CpuImage: '',
    CpuRate: 0,
  };
  constructor(
    private cpuService: CPUService,
    private ramService: RamService,
    private disqueService: DisqueService
  ) {}

  ngOnInit(): void {
    this.disqueService.getDisque().subscribe((data) => (this.disque = data));
    this.cpuService.getCPU().subscribe((data) => {
      this.cpu = data;
    });
    this.ramService.getRam().subscribe((data) => (this.ram = data));
  }
}
