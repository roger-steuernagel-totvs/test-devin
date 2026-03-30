import { Component, OnInit } from '@angular/core';
import { AppLogicService } from './app-logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public logic: AppLogicService) {}

  ngOnInit(): void {
    this.logic.initialize();
    this.logic.writeToLog('Application initialized.');
  }

  onButtonClick(): void {
    this.logic.writeToLog('Button clicked!');
  }
}
