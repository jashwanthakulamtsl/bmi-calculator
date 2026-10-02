import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {

  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;
  
  category = '';

  calculateBMI(): void {

    if (!this.height || !this.weight) {
      return;
    }

    const heightInMeters = this.height / 100;

    this.bmi = Number(
      (this.weight / (heightInMeters * heightInMeters))
        .toFixed(2)
    );

    if (this.bmi < 18.5) {
      this.category = 'Underweight';
    } else if (this.bmi < 25) {
      this.category = 'Normal Weight';
    } else if (this.bmi < 30) {
      this.category = 'Overweight';
    } else {
      this.category = 'Obese';
    }
  }

  reset(): void {
    this.height = null;
    this.weight = null;
    this.bmi = null;
    this.category = '';
  }
}