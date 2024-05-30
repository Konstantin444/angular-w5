import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-launches',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css'],
  providers: [SpacexService]
})
export class LaunchesComponent implements OnInit {
  launches: any[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
    });
  }
}
