
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgControl, Validators, Validator } from '@angular/forms';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[MobileValidator]',
  providers:[
    {
    provide: NG_VALIDATORS,
    useExisting: MobileValidatorDirective,
    multi: true
    }
  ]
})
export class MobileValidatorDirective implements Validator{ 

  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value.length != 10) {
      return { 'phoneNumberInvalid': true };
    }
    return null;
  }
 /* private regex:RegExp=new RegExp('^[0-9]*$');
  private specialKeys:Array<String>=['Backspace','ArrowLeft','ArrowRight'];
  constructor(private eRef:ElementRef) { }
  
 @HostListener('keydown',['$event'])onkeydown(event:KeyboardEvent){
   if(this.specialKeys.indexOf(event.key)!==-1){
     return;
   }
   const inputvalue:string=this.eRef.nativeElement.value.concat(event.key);
   console.log(event.key);
   if(inputvalue&& !String(inputvalue).match(this.regex)){
     event.preventDefault();
   }
   return;
 }
 @HostListener('paste',['$event'])onPaste(event){
   return;
 }  
 */

}