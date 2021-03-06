
import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';

@Injectable()
export class EnterDetailsGuardService implements CanActivate{

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000);
    });
  }

}
