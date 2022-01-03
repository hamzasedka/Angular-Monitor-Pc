import { Ram } from '../../Model/Ram';
import { Observable } from 'rxjs';

export interface IRamService {
  getRam(): Observable<Ram>;
}
