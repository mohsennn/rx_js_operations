
 import { Component } from '@angular/core';
 import { of, concat } from 'rxjs';


concat(of(1,2,3),
of(4,5,6),
of(7,8,9))
.subscribe(console.log);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
