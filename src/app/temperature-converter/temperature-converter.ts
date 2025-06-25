import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temperature-converter.html',
  styleUrls: ['./temperature-converter.css']
})
export class TemperatureConverterComponent {
  celsius: number | null = null;
  fahrenheit: number | null = null;
  showError = false;

  convertTemperature() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9) / 5 + 32;
      this.showError = false;
    } else if (this.fahrenheit !== null) {
      this.celsius = ((this.fahrenheit - 32) * 5) / 9;
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  onCelsiusInput() {
    if (this.celsius !== null) {
      this.fahrenheit = null;
    }
  }

  onFahrenheitInput() {
    if (this.fahrenheit !== null) {
      this.celsius = null;
    }
  }


  resetForm() {
    this.celsius = null;
    this.fahrenheit = null;
    this.showError = false;
  }
}
