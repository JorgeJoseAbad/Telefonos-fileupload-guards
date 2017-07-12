import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { FileUploadModule, FileSelectDirective, FileDropDirective } from "ng2-file-upload";
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { PhoneService} from './phone.service';

//import { FileUploadModule } from 'ng2-file-upload';
//import { FileUploader } from "ng2-file-upload";

import { EnterDetailsGuardService} from './phone-details/enter-details-guard.service';
import { LeaveAddPhoneGuardService} from './add-phone/leave-add-phone-guard.service';
import { ResolveDetailsGuardService} from './phone-details/resolve-details-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    //FileUploadModule,
    //FileSelectDirective,
    //FileDropDirective,
    //FileUploader,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService,
              EnterDetailsGuardService,
              LeaveAddPhoneGuardService,
              ResolveDetailsGuardService],
  bootstrap: [AppComponent]
})


export class AppModule { }
