import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Legend } from './legend';
import { LEGENDS } from './real-legends';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class LegendService {

  constructor(private messageService: MessageService) { }

  getLegends(): Observable<Legend[]> {
    // TODO: send the message _after_ fetching the 
    this.messageService.add('LegendService: fetched legends');
    return of(LEGENDS);
  }
}