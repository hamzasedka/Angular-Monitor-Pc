import { CPU } from './../../Model/CPU';
import { HttpClient } from '@angular/common/http';
import { ICpuService } from './cpu.interface.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CPUService implements ICpuService {
  constructor(private httpClient: HttpClient) {}

  getCPU(): Observable<CPU> {
    return this.httpClient.get('api/cpu') as Observable<CPU>;
  }
}
