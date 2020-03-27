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

  userModel = new User('Rob', 'tob@test.com', 555555555, '', 'morning', true);
}
