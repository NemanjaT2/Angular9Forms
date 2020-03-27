import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tdf';

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('', 'tob@test.com', 1234567890, '', 'morning', true);
}
