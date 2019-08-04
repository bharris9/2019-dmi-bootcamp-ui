import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { SoccerBoxScore } from '../soccer.model';
import { SoccerService } from '../soccer.service';

@Component({
  selector: 'app-soccer-match',
  templateUrl: './soccer-match.component.html',
  styleUrls: ['./soccer-match.component.scss']
})
export class SoccerMatchComponent implements OnInit, OnDestroy {
  soccerBoxScore: SoccerBoxScore;

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private service: SoccerService) {}

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.service.getBoxScore(gameId, 'fifa.wwc').subscribe(
      boxScore => {
        this.soccerBoxScore = boxScore;
      },
      err => console.log(err)
    );
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }
}
