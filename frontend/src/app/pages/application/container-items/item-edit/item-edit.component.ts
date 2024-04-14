import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../../services/item';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';

// noinspection JSConstantReassignment
@Component({
  selector: 'app-item-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './item-edit.component.html',
  styleUrl: './item-edit.component.css',
})
export class ItemEditComponent {
  submitted = false;
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  @Input()
  public editPost!: Item;

  @Output()
  emitterPostToSave = new EventEmitter();

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
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  valider() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.emitterPostToSave.emit(this.editPost);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
