import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRamService } from './ram.interface.service';
import { Injectable } from '@angular/core';
import { Ram } from 'src/app/Model/Ram';

@Injectable({
  providedIn: 'root',
})
export class RamService implements IRamService {
  constructor(private httpClient: HttpClient) {}
  getRam() {
    return this.httpClient.get('api/ram') as Observable<Ram>;
  }
}
