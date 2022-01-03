import { IDisqueService } from './disque.interface.service';
import { Disque } from './../../Model/Disque';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisqueService implements IDisqueService {
  constructor() {}
  getDisque(): Observable<Disque> {
    return of({
      MaxCapacity: 1,
      DisqueRate:
        Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0) + 1)) +
        Math.ceil(0),
      DisqueImage:
        'https://media.istockphoto.com/vectors/computer-hard-disk-drive-drawing-vector-id514854937',
      DisqueName: 'Disque',
    });
  }
}
