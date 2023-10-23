import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordTestComponent } from './components/password-test/password-test.component';
import { StrengthComponent } from './components/strength/strength.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordTestComponent,
    StrengthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
