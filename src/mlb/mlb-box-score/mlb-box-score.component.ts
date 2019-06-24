import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MlbBoxScore } from '../mlb.model';
import { MlbService } from '../mlb.service';

@Component({
  selector: 'app-mlb-box-score',
  templateUrl: './mlb-box-score.component.html',
  styleUrls: ['./mlb-box-score.component.scss']
})
export class MlbBoxScoreComponent implements OnInit {
  boxScore: MlbBoxScore;

  constructor(private route: ActivatedRoute, private service: MlbService) {}

  ngOnInit() {
    let gameId = this.route.snapshot.paramMap.get('id');
    this.service.getBoxScore(gameId).subscribe(
      boxScore => {
        this.boxScore = boxScore;
      },
      err => console.log(err)
    );
  }
}
