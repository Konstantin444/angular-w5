import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { MissionsComponent } from './missions/missions.component';
import { RocketsComponent } from './rockets/rockets.component';
import { LaunchesComponent } from './launches/launches.component';

export const appRoutes: Routes = [
  { path: 'missions', component: MissionsComponent },
  { path: 'rockets', component: RocketsComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: '', redirectTo: '/missions', pathMatch: 'full' }
];

export const appRoutingProviders = [
  provideRouter(appRoutes)
];
