import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToLab() {
    console.log('123');
    console.log('Navigating to RxJS Lab', this.router);
    this.router.navigate(['/rxjs-lab']);
  }
}
