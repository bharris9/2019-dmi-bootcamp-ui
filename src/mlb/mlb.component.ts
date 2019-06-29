import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MlbScore } from './mlb.model';
import { MlbService } from './mlb.service';

@Component({
  selector: 'app-mlb',
  templateUrl: './mlb.component.html',
  styleUrls: ['./mlb.component.scss']
})
export class MlbComponent implements OnInit {
  mlbScores: MlbScore[];

  constructor(private service: MlbService, private router: Router) {}

  ngOnInit() {
    this.getScores(new Date());
  }

  handleBoxClick(gameId: number) {
    this.router.navigateByUrl('/mlb/' + gameId);
  }

  handleDateChange(date: Date) {
    this.getScores(date);
  }

  private getScores(date: Date) {
    this.service.getScores(date).subscribe(
      scores => {
        this.mlbScores = scores.sort(
          (a, b) => Number(a.completed) - Number(b.completed)
        );
      },
      err => console.log(err)
    );
  }
}
