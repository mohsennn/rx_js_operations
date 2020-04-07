
 import { Component } from '@angular/core';
 import { of, concat } from 'rxjs';
 import { startWith } from 'rxjs/operators';


/*concat operator */
const S1=of(1,2,3);
const S2 =of(4,5,6);
//concat(S1,S2).subscribe(console.log);

/*Start with operator */
const source = of(1,2,3);
const example = source.pipe(startWith(0));
const subscribe = example.subscribe(val => console.log(val));
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
