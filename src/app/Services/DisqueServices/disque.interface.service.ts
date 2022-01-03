import { Disque } from '../../Model/Disque';
import { Observable } from 'rxjs';
export interface IDisqueService {
  getDisque(): Observable<Disque>;
}
