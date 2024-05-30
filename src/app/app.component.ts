import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <a routerLink="/launches" routerLinkActive="active">Launches</a>
      <a routerLink="/missions" routerLinkActive="active">Missions</a>
      <a routerLink="/rockets" routerLinkActive="active">Rockets</a>
    </nav>
    <main>
      <header class="app-header">
        <h1>Space Tracker</h1>
        <p>Welcome to the Space Tracker app! Explore missions, rockets, and upcoming launches from SpaceX.</p>
      </header>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
