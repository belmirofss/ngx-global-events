# ngx-global-events | Angular6+


A really simple way to emit and listen global events in Angular 6+.

### Installation

```

$ npm i ngx-global-events --save

````


### How to use?

##### To import:

```javascript
// component.ts
import { NgxGlobalEventsService } from 'ngx-global-events';

constructor(
    private globalEventsService: NgxGlobalEventsService
) { }

````

##### To emit:

```javascript

// without data
this.globalEventsService.get("anyEventWithAName").emit();
// or 
this.globalEventsService.emit("anyEventWithAName");

// with data
const dataToEmit = "Hello world!";
this.globalEventsService.get("anyEventWithAName").emit(dataToEmit);
// or
this.globalEventsService.emit("anyEventWithAName", dataToEmit);

````

##### To listen:

```javascript

// without data
this.globalEventsService.get("anyEventWithAName").subscribe(() => {
  // code to do when listen something
});
  
// with data
this.globalEventsService.get("anyEventWithAName").subscribe((data) => {
    console.log(data); // "Hello world!";
    // code to do when listen something
});

````

##### On any event:

```javascript
this.globalEventsService.onEvent.subscribe((data: NgxGlobalEvent) => {
  // code to do when listen something
})

// NgxGlobalEvent
// {
  // eventName: 'name of event - is a string',
  // data: ['data emitted - is anything']
// }

````