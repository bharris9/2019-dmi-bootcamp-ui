import { Component, OnInit } from '@angular/core';
import { MlbService } from './mlb.service';
import { MlbScore } from './mlb.model';

@Component({
  selector: 'app-mlb',
  templateUrl: './mlb.component.html',
  styleUrls: ['./mlb.component.scss']
})
export class MlbComponent implements OnInit {
  mlbScores: MlbScore[];

  constructor(private service: MlbService) {}

  ngOnInit() {
    this.service.getScores().subscribe(
      scores => {
        this.mlbScores = scores;
      },
      err => console.log(err)
    );
  }
}
