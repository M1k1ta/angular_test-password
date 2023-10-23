import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  constructor() { }

  getPasswordStrength = (password: string) => {
    let strength = 0;
    const leters = /[A-Za-z]/;
    const numbers = /\d/;
    const symbols = /[^A-Za-z0-9]/;
    const passwordRequirements = [leters, numbers, symbols];

    if (password.length < 8 && password.length > 0) {
      return -1;
    }

    for (const regex of passwordRequirements) {
      if (regex.test(password)) {
        strength++;
      }
    }

    return strength;
  }
}
