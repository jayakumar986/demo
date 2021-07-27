import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  exform: FormGroup;

  ngOnInit() {

  this.exform = new FormGroup({
    'name' : new FormControl(),
    'email' : new FormControl(),
    'phone' : new FormControl(),
    'pancard':new FormControl(),
    'ipaddress':new FormControl(),
    'mac':new FormControl()
    
  });
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get pancard() {
    return this.exform.get('pancard');
  }get ipaddress() {
    return this.exform.get('ipaddress');
  }get mac() {
    return this.exform.get('mac');
  }
 
}
