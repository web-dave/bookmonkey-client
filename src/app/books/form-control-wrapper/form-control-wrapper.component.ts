import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookNewComponent } from '../book-new/book-new.component';

@Component({
  selector: 'app-form-control-wrapper',
  templateUrl: './form-control-wrapper.component.html',
  styleUrls: ['./form-control-wrapper.component.scss'],
})
export class FormControlWrapperComponent {}
