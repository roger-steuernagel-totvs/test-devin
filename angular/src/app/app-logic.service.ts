import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppLogicService {
  private logMessages: string[] = [];

  initialize(): void {
    this.logMessages = [];
  }

  writeToLog(message: string): void {
    this.logMessages.push(message);
  }

  getLog(): string {
    return this.logMessages.join('\n');
  }
}
