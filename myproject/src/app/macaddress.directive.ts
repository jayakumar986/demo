import { NG_VALIDATORS } from '@angular/forms';
import { Directive,forwardRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
@Directive({
  selector: '[appMacaddress]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MacaddressDirective),
      multi: true
  }
  ]
})
export class MacaddressDirective {

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any; } {
    // tslint:disable-next-line:max-line-length
    const mac_REGEXP = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|([0-9a-fA-F]{4}\\.[0-9a-fA-F]{4}\\.[0-9a-fA-F]{4})$/;
    if (c.value) {
        return mac_REGEXP.test(c.value) ? null : {

            isValid: { message: 'mac address is required .' }

        };
    }
    return null;

}


}
