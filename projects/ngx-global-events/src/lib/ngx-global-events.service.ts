import { Injectable, EventEmitter } from '@angular/core';
import { NgxGlobalEvent } from './NgxGlobalEvent';

@Injectable({
  providedIn: 'root',
})
export class NgxGlobalEventsService {

  constructor(){ }

  private _emitters: { [ eventName: string ]: EventEmitter<any> } = {};

  public onEvent: EventEmitter<NgxGlobalEvent> = new EventEmitter<NgxGlobalEvent>();

  get(eventName: string): EventEmitter<NgxGlobalEvent> {
    if (!this._emitters[eventName]){
      this._emitters[eventName] = new EventEmitter<any>();

      this._emitters[eventName].subscribe(
        data => this.onEvent.emit({
          eventName,
          data
        })
      );
    }
        
    return this._emitters[eventName];
  }

  emit(eventName: string, data?: any): void {
    if (this._emitters[eventName]) {
      this._emitters[eventName].emit(data);
      this.onEvent.next({
        eventName,
        data
      });
    }
  }
}
