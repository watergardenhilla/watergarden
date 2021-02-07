import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'watergarden';
  rows = [0, 1, 2, 3, 4, 5, 6];
  columns = [0, 1, 2, 3, 4, 5, 6];
}
