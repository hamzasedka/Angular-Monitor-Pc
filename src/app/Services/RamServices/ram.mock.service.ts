import { IRamService } from './ram.interface.service';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Ram } from 'src/app/Model/Ram';

@Injectable({
  providedIn: 'root',
})
export class RamService implements IRamService {
  constructor() {}
  getRam(): Observable<Ram> {
    return of({
      MaxCapacity: 8,
      RamRate:
        Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0) + 1)) +
        Math.ceil(0),
      RamImage: '',
      RamName: 'RAM',
    });
  }
}
