import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css'],
  providers: [SpacexService]
})
export class MissionsComponent implements OnInit {
  missions: any[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getMissions().subscribe(data => {
      this.missions = data;
    });
  }
}
