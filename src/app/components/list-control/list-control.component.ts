import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { Schema } from 'src/app/controls.data';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.scss'],
})
export class ListControlComponent {
  @Input()
  public schema!: Schema;

  public form!: FormGroup;

  public constructor(private _fb: NonNullableFormBuilder) {}

  public ngOnInit(): void {
    this.form = this._fb.group({});

    if (this.schema.type === 'checkbox') {
      this.schema.controls.forEach((control) => {
        this.form.addControl(control.key, new FormControl(control.checked));
      });
    }

    if (this.schema.type === 'radio') {
      this.form.addControl(
        this.schema.controls[0].key,
        new FormControl(this.schema.controls[0].value)
      );
    }
  }
}
