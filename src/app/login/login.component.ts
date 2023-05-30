import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly router: Router
  ) {}

  login() {
    this.loggerService.isLoggedin = true;
    this.loggerService.user = {
      id: 1,
      firstName: 'Harjas',
      lastName: 'Malhotra',
      userName: 'Jassa',
    };
    this.router.navigate(['/account']);
  }
}