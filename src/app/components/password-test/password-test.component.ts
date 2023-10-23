import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordStrengthService } from 'src/app/services/password-strength.service';

@Component({
  selector: 'app-password-test',
  templateUrl: './password-test.component.html',
  styleUrls: ['./password-test.component.scss']
})
export class PasswordTestComponent {
  password = new FormControl('');
  passwordStrength = 0;

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnInit() {
    this.password.valueChanges.subscribe(value => {
      this.handlePasswordChange(value || '');
    });
  }

  handlePasswordChange(value: string) {
    const { getPasswordStrength } = this.passwordStrengthService;

    this.passwordStrength = getPasswordStrength(value);
  }
}
