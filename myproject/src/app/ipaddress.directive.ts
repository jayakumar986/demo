import { Directive,forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appIpaddress]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IpaddressDirective),
      multi: true
  }
  ]
})
export class IpaddressDirective {

  constructor() { }
   
  
  validate(c: AbstractControl): { [key: string]: any; } {
    // tslint:disable-next-line:max-line-length
    const ip_REGEXP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (c.value) {
        return ip_REGEXP.test(c.value) ? null : {

            isValid: { message: 'ip address is required .' }

        };
    }
    return null;

}

}
