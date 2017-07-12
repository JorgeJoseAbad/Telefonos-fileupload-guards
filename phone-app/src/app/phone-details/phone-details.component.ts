
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneService } from './../phone.service';
import { EnterDetailsGuardService} from './enter-details-guard.service';
import {ResolveDetailsGuardService} from './resolve-details-guard.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css'],
  providers: [PhoneService,
    EnterDetailsGuardService,
  ResolveDetailsGuardService]
})
export class PhoneDetailsComponent implements OnInit {
  phone: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private phoneService: PhoneService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((resolved) => {
        this.phone = resolved['phone'];
        console.log(this.phone.image);
      });
    /*this.route.params.subscribe(params => {
      this.getPhoneDetails(params['id']);
    });*/
  }

/*
  getPhoneDetails(id) {
    this.phoneService.get(id)
      .subscribe((phone) => {
        this.phone = phone;
      });
  }*/

  deletePhone() {
  if (window.confirm('Are you sure?')) {
    this.phoneService.remove(this.phone._id)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
}
