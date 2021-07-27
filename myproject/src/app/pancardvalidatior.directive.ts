import { NG_VALIDATORS,AbstractControl,Validator } from '@angular/forms';
import { Directive,forwardRef } from '@angular/core';

@Directive({
  selector: '[appPancardvalidatior]',
  providers: [
    {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => PancardvalidatiorDirective),
        multi: true
    }
]
})
export class PancardvalidatiorDirective {

  constructor() { }
 
  validate(c: AbstractControl): { [key: string]: any; } {
    // tslint:disable-next-line:max-line-length
    const pan_REGEXP = /^[A-Z]{5}([0-9]){4}[A-Z]{1}$/;
    if (c.value) {
        return pan_REGEXP.test(c.value) ? null : {

            isValid: { message: 'pan card is required and AAAPL1234C.'}

        };
    }
    return null;

}

}
