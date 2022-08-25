import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";


export function passWordMisMatch(control:AbstractControl) : ValidationErrors | null {
    const passWord = control.get('passWord')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if(passWord != confirmPassword) {
        return {'passwordNotMatch':true};
    }
    return null ;
}

export function ageMismatch(control:AbstractControl):ValidationErrors | null {
//logic
    return null;
}