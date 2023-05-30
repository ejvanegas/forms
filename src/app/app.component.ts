import { Component } from '@angular/core';
import { DISPONIBILITY, LOCATION_TYPE, ORDER } from './controls.data';
import { FiltersService } from './services/filters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public LOCATION_TYPE = LOCATION_TYPE;
  public DISPONIBILITY = DISPONIBILITY;
  public ORDER = ORDER;

  public constructor(private _filtersService: FiltersService) {}

  public cleanFilters(): void {
    this._filtersService.cleanedFilters$.next();
  }
}
