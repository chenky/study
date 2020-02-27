// import { Observable, range, fromEvent } from 'rxjs';
// import { map, filter,scan } from 'rxjs/operators'

// const RxJsTest = {
//   demo1: function(){
//     range(1, 20).pipe(
//       filter(x => x % 2 === 1),
//       map(x => x + x)
//     ).subscribe(x => console.log(x));
//   },
//   demo2: function(){
//     fromEvent(document,'click').subscribe(event=>console.log(`clicked`))
//   },
//   demo3: function(){
//     fromEvent(document, 'click')
//   .pipe(scan(count => count + 1, 0))
//   .subscribe(count => console.log(`Clicked ${count} times`));
//   }
// };

// export default RxJsTest

// import { fromEvent } from 'rxjs';
// import { throttleTime, scan } from 'rxjs/operators';

// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000),
//     scan(count => count + 1, 0)
//   )
//   .subscribe(count => console.log(`Clicked ${count} times`));

import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');
