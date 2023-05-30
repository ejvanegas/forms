import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { Schema } from 'src/app/controls.data';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.scss'],
})
export class ListControlComponent {
  @Input()
  public schema!: Schema;

  public form!: FormGroup;

  public defaultValues: Record<string, any> = {};

  public constructor(
    private _fb: NonNullableFormBuilder,
    private _filtersService: FiltersService
  ) {}

  public ngOnInit(): void {
    this.form = this._fb.group({});

    if (this.schema.type === 'checkbox') {
      this.schema.controls.forEach((control) => {
        const { key, checked } = control;
        this.defaultValues[key] = checked;
        this.form.addControl(key, new FormControl(checked));
      });
    }

    if (this.schema.type === 'radio') {
      const { key, value } = this.schema.controls[0];
      this.defaultValues[key] = value;
      this.form.addControl(key, new FormControl(value));
    }

    this._filtersService.cleanedFilters$.subscribe((_) => {
      this.form.reset(this.defaultValues);
    });
  }
}
