import {Component} from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent {
  isVisible = true;

  navigateToWebOnClick(): void {
    this.isVisible = false;
  }
}
