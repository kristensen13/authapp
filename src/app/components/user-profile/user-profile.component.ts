import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: ` <ul *ngIf="auth.user$ | async as user">
    <pre>{{ user | json }}</pre>

    <img [src]="user.picture" alt="" />
  </ul>`,
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}
