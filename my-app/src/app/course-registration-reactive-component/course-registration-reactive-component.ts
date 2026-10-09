import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-registration-reactive-component',
  standalone: false,
  styleUrl: './course-registration-reactive-component.css',
  templateUrl: './course-registration-reactive-component.html',
})
export class CourseRegistrationReactiveComponent {
  public regForm: FormGroup = new FormGroup({
    name: new FormControl('Trần Mai Anh', [
      Validators.required,
      Validators.minLength(3),
      this.customNameValidator
    ]),
    email: new FormControl('anhtmk24406h@uel.edu.vn', [
      Validators.required,
      this.customEmailValidator
    ]),
    password: new FormControl('Anh@123456', [
      Validators.required,
      this.customPasswordValidator
    ]),
    confirmPass: new FormControl('Anh@123456')
  }, {
    validators: (form: AbstractControl) => {
      const password = form.get('password')?.value;
      const confirmPass = form.get('confirmPass')?.value;
      return password === confirmPass ? null : { mismatch: true };
    }
  });

  setDefaultValues() {
    this.regForm.patchValue({
      name: 'Trần Duy Thanh',
      email: 'thanhtd@uel.edu.vn',
      password: 'User@123456',
      confirmPass: 'User@123456'
    });
  }

  // 1. Validator kiểm tra tên không chứa ký tự đặc biệt
  customNameValidator(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) return null;
    const matchName = /[@#$%&]/g.test(control.value);
    return matchName ? { 'nameNotMatch': { value: control.value } } : null;
  }

  // 2. Validator kiểm tra email hợp lệ (customemail / customEmailValidator)
  customEmailValidator(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) return null;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !emailPattern.test(control.value) ? { 'invalidEmail': { value: control.value } } : null;
  }

  customemail = this.customEmailValidator;

  // 3. Validator kiểm tra mật khẩu mạnh (customPassword / customPasswordValidator)
  // Yêu cầu: ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt, tối thiểu 8 ký tự
  customPasswordValidator(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) return null;
    const value: string = control.value;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_~`+=\-\[\]\\\/]/.test(value);
    const isMinLength = value.length >= 8;

    const isStrong = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isMinLength;

    return !isStrong
      ? {
        'strongPassword': {
          hasUpperCase,
          hasLowerCase,
          hasNumber,
          hasSpecialChar,
          isMinLength,
          value: control.value
        }
      }
      : null;
  }

  customPassword = this.customPasswordValidator;
}
