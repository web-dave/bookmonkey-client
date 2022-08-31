import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { IBundesland, IForm, IUser } from './iform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup<IForm<IUser>>;
  title = 'bookmonkey-client-14';
  user: IUser;
  states: IBundesland[] = Object.values(IBundesland);
  constructor(private formBuilder: NonNullableFormBuilder) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required]],
      street: [''],
      city: [''],
      zip: [0],
      state: [IBundesland.hamburg],
      confirmed: [true, [Validators.requiredTrue]],
    });
    this.user = this.myForm.getRawValue();
  }
}
