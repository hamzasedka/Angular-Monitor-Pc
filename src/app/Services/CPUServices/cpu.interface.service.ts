import { CPU } from '../../Model/CPU';
import { Observable } from 'rxjs';

export interface ICpuService {
  getCPU(): Observable<CPU>;
}
