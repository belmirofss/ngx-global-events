import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxGlobalEventsService {

  constructor(){
  }

  private _emitters: { [ eventName: string ]: EventEmitter<any> } = {}

  getEvent (eventName: string): EventEmitter<any> {
    if (!this._emitters[eventName]){
      this._emitters[eventName] = new EventEmitter<any>();
    }
        
    return this._emitters[eventName];
  }
}
