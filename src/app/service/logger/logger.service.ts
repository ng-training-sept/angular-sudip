import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger{

  log(): void {
    throw new Error('Method not implemented.');
  }
}
