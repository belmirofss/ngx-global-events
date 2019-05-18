import { Component } from '@angular/core';
import { NgxGlobalEventsService } from 'ngx-global-events/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example - NgxGlobalEvents';

  constructor(
    private _globalEventsService: NgxGlobalEventsService
  ) {
    this.anyFunctionToListen();
    this.anyFunctionToEmit();
  }

  anyFunctionToEmit() {
    // without data
    this._globalEventsService.getEvent("anyEventWithAName").emit();
      
    // with data
    const dataToEmit = "Hellow world!";
    this._globalEventsService.getEvent("anyEventWithAName").emit(dataToEmit);
  }

  anyFunctionToListen() {
    // without data
    this._globalEventsService.getEvent("anyEventWithAName").subscribe(() => {
        // code to do when listen something
    });
      
    // with data
    this._globalEventsService.getEvent("anyEventWithAName").subscribe((data) => {
        console.log(data); // "Hello world!";
        
        // code to do when listen something
    });
  }
  
}
