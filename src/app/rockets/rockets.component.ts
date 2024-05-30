import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-rockets',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css'],
  providers: [SpacexService]
})
export class RocketsComponent implements OnInit {
  rockets: any[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getRockets().subscribe(data => {
      this.rockets = data;
    });
  }
}
