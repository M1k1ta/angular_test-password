import { Component } from '@angular/core';

@Component({
  selector: 'app-password-test',
  templateUrl: './password-test.component.html',
  styleUrls: ['./password-test.component.scss']
})
export class PasswordTestComponent {
  password = '';
  passwordStrength = 0;

  handlePasswordChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;

    this.passwordStrength = this.getPasswordStrength(value);
    this.password = value;
  }

  getPasswordStrength = (password: string) => {
    let strength = 0;
    const leters = /[A-Za-z]/;
    const numbers = /\d/;
    const symbols = /[^A-Za-z0-9]/;

    if (password.length < 8 && password.length > 0) {
      return -1;
    }

    if (leters.test(password)) {
      strength++;
    }

    if (numbers.test(password)) {
      strength++;
    }

    if (symbols.test(password)) {
      strength++;
    }

    return strength;
  }
}
