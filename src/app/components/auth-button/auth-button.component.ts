// import { Component } from '@angular/core';

// // Import the AuthService type from the SDK
// import { AuthService } from '@auth0/auth0-angular';

// @Component({
//   selector: 'app-auth-button',
//   template:
//     '<button class="btn btn-outline-primary" (click)="auth.loginWithRedirect()">Ingresar</button>',
// })
// export class AuthButtonComponent {
//   // Inject the authentication service into your component through the constructor
//   constructor(public auth: AuthService) {}
// }

import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button
        (click)="auth.logout({ returnTo: document.location.origin })"
        class="btn btn-outline-danger"
      >
        Salir
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button
        (click)="auth.loginWithRedirect()"
        class="btn btn-outline-primary"
      >
        Ingresar
      </button>
    </ng-template>
  `,
  styles: [],
})
export class AuthButtonComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}
}
