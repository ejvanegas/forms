import { Component } from '@angular/core';
import { DISPONIBILITY, LOCATION_TYPE, ORDER } from './controls.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public LOCATION_TYPE = LOCATION_TYPE;
  public DISPONIBILITY = DISPONIBILITY;
  public ORDER = ORDER;
}
