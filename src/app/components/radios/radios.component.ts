import { Component, Input } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, FormControl } from '@angular/forms';
import { Schema } from 'src/app/controls.data';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
})
export class RadiosComponent {
  @Input()
  public schema!: Schema;

  public form!: FormGroup;

  public constructor(private _fb: NonNullableFormBuilder) {}

  public ngOnInit(): void {
    this.form = this._fb.group({});
    this.form.addControl(
      this.schema.controls[0].key,
      new FormControl(this.schema.controls[0].value)
    );
  }
}
