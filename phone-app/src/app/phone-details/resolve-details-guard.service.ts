import { Injectable } from '@angular/core';
import {PhoneService} from '../phone.service';
import {Router,ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ResolveDetailsGuardService implements Resolve<any>{

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
      return this.phoneService.get(route.params['id'])
        .catch((err) => {
          this.router.navigate(['/']);
          return Observable.of(err);
        });
  }

}
