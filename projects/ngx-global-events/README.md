# NgxGlobalEvents


A really simple way to emit and listen global events in Angular 6+.

### Installation

```

$ npm i ngx-global-events --save

````


### How to use?

##### To import:

```javascript

import { NgxGlobalEventsService } from 'ngx-global-events/public_api';

// component.ts
constructor(
    private _globalEventsService: NgxGlobalEventsService
) { }

````

##### To emit:

```javascript

anyFunctionToEmit() {
  // without data
  this._globalEventsService.getEvent("anyEventWithAName").emit();
    
  // with data
  const dataToEmit = "Hello world!";
  this._globalEventsService.getEvent("anyEventWithAName").emit(dataToEmit);
}

````

##### To listen:

```javascript

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

````