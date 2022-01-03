import { HttpClient } from '@angular/common/http';
import { IDisqueService } from './disque.interface.service';
import { Disque } from './../../Model/Disque';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisqueService implements IDisqueService {
  constructor(private httpClient: HttpClient) {}
  getDisque() {
    return this.httpClient.get('api/disque') as Observable<Disque>;
  }
}
