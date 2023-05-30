import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Schema } from 'src/app/controls.data';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss'],
})
export class ChecksComponent implements OnInit {
  @Input()
  public schema!: Schema;

  public form!: FormGroup;

  public constructor(private _fb: NonNullableFormBuilder) {}

  public ngOnInit(): void {
    this.form = this._fb.group({});
    this.schema.controls.forEach((control) => {
      this.form.addControl(control.key, new FormControl(control.checked));
    });
  }
}
