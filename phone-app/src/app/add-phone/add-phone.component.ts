import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload"; //esto a modo de prueba
import { LeaveAddPhoneGuardService} from './leave-add-phone-guard.service';
//const BASE_URL: string = "http://localhost:3000/";

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/phones/`
    //url: `/phones/`
  });

    newPhone = {
      name: '',
      brand: '',
      specs: []
    };

    oldPhone = {
      name: '',
      brand: '',
      specs: []
    };

    feedback: string;


    constructor() { }



    ngOnInit() {
      this.uploader.onSuccessItem = (item, response) => {
        this.feedback = JSON.parse(response).message;
      };

      this.uploader.onErrorItem = (item, response, status, headers) => {
        this.feedback = JSON.parse(response).message;
      };
    }

    addSpec(spec) {
      this.newPhone.specs.push(spec);
    }

    submit() {

      this.uploader.onBuildItemForm = (item, form) => {
        form.append('name', this.newPhone.name);
        form.append('brand', this.newPhone.brand);
        form.append('specs', JSON.stringify(this.newPhone.specs));

        console.log(this.newPhone);
      };

      this.uploader.uploadAll();
      console.log(this.newPhone);
    }



    isFormClean(): boolean {
      console.log(this.newPhone);
      //este codigo le falta definir un previous phone para poder comparar
      //creo un oldPhone para ello
        if ((this.oldPhone.name !== this.newPhone.name)||
            (this.oldPhone.brand !== this.newPhone.brand)) {
          return window.confirm(`
              Unsaved changes.
              Are you sure you want to leave?
          `);
          }

          return true;
        }
  }
