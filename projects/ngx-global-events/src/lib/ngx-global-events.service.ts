import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxGlobalEventsService {

  constructor(){ }

  private _emitters: { [ eventName: string ]: EventEmitter<any> } = {};

  public onEvent: EventEmitter<{ eventName: string, data: any }> = new EventEmitter<{ eventName: string, data: any }>();

  get(eventName: string): EventEmitter<any> {
    if (!this._emitters[eventName]){
      this._emitters[eventName] = new EventEmitter<any>();

      this._emitters[eventName].subscribe(
        data => {
          this.onEvent.emit({
            eventName,
            data
          })
        }
      )
    }
        
    return this._emitters[eventName];
  }

  emit(eventName: string, data?: any): void {
    if (this._emitters[eventName]) {
      this._emitters[eventName].emit(data);
      this.onEvent.next({
        eventName,
        data
      })
    }
  }
}
