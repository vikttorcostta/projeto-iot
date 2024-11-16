import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isCollapsed = false;

  constructor(private router: Router) {
  }

  public redirecionarLogin() {
    this.router.navigate(['/login']);
  }

}
