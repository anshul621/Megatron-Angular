import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  selectedSecretType: string = 'aeps_secret';
  inputText: string = '';
  selectedAction: string = 'encrypt';
  outputMessage: string = '';

  constructor(private dataService: DataService) {}

  submit(): void {
    // Call the DataService to handle the submission
    this.dataService.processData(this.selectedSecretType, this.inputText, this.selectedAction)
    .subscribe(
      response => {
        console.log('API Response:', response);
        this.outputMessage = response; // Assuming the API returns the result
        console.log('Output Message:', this.outputMessage);
      },
      error => {
        console.error('Error:', error);
        console.log('Output Message:', this.outputMessage);
      }
    );
  }
  reset(): void {
    this.selectedSecretType = 'aeps_secret';
    this.inputText = '';
    this.selectedAction = 'encrypt';
    this.outputMessage = '';
  }
}
