import { CPU } from './../../Model/CPU';
import { ICpuService } from './cpu.interface.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CPUService implements ICpuService {
  constructor(private httpClient: HttpClient) {}

  getCPU(): Observable<CPU> {
    return of({
      CpuRate:
        Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0) + 1)) +
        Math.ceil(0),
      CpuImage:
        'https://image.shutterstock.com/image-vector/vector-technology-computer-chip-icon-260nw-1230824251.jpg',
      CpuName: 'CPU',
    });
  }
}
