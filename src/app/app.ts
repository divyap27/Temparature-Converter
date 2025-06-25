import { Component } from '@angular/core';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemperatureConverterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'temperature-converter';
}