import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-advanced-demo';
  constructor(private router: Router) {}

  goToLab() {
    this.router.navigate(['/rxjs-lab']);
  }
}
