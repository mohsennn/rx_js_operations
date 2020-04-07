
 import { Component } from '@angular/core';
 import { of, concat, from , throwError } from 'rxjs';
 import { startWith, catchError, filter } from 'rxjs/operators';


/*concat operator*/
const S1=of(1,2,3);
const S2 =of(4,5,6);
//concat(S1,S2).subscribe(console.log);

/* Start with operator */
const source = of(1,2,3);
const example = source.pipe(startWith(0)).subscribe(val => console.log(val))

/* catch / catchError operator  */
const source1 =throwError('this is an error');
const example1 = source1.pipe(catchError(val1 => of(`I caught: ${val1}`))).subscribe(val1 => console.log(val1));

/* filter operator */
const source2 = from([1, 2, 3, 4, 5]);
const example2 = source2.pipe(filter(num => num === 2)).subscribe(val3 => console.log(`Affichage de filter : ${val3}`));

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

}
