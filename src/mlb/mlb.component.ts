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
        this.mlbScores = scores.sort(
          (a, b) => Number(a.completed) - Number(b.completed)
        );
      },
      err => console.log(err)
    );
  }
}
