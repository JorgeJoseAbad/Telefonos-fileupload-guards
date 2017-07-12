import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddPhoneComponent } from './add-phone.component';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LeaveAddPhoneGuardService implements CanDeactivate<AddPhoneComponent>{

  constructor() { }

  canDeactivate(component: AddPhoneComponent)
    : Observable<boolean> | Promise<boolean> | boolean {

    return component.isFormClean();
  }

}
