import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Directive } from '@angular/core';
import { Validator,NG_VALIDATORS,
  AbstractControl } from '@angular/forms';
  import {  forwardRef, Attribute, Input } from '@angular/core';

@Directive({
  selector: '[appAlphabetValidator]',
  providers:[
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => AlphabetValidatorDirective),
        multi: true
    }
  
  ]
})
export class AlphabetValidatorDirective implements Validator {
  
  constructor() { }

  validate(c: AbstractControl): { [key: string]: any; } {
    // tslint:disable-next-line:max-line-length
    const name_REGEXP = /^[A-za-z]+$/;
    if (c.value) {
        return name_REGEXP.test(c.value) ? null : {

            isValid: { message: 'name should be only letters.' }

        };
    }
    return null;

}


}
