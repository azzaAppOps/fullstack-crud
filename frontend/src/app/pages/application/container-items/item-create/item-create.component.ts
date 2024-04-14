import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-item-create',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass],
  templateUrl: './item-create.component.html',
  styleUrl: './item-create.component.css',
})
export class ItemCreateComponent {
  submitted = false;
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  @Output()
  emitterNewPost = new EventEmitter();

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
    this.form.reset();
  }

  add() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.emitterNewPost.emit(this.form.value);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
