import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { WwcBoxScore } from '../wwc.model';
import { WwcService } from '../wwc.service';

@Component({
  selector: 'app-wwc-match',
  templateUrl: './wwc-match.component.html',
  styleUrls: ['./wwc-match.component.scss']
})
export class WwcMatchComponent implements OnInit, OnDestroy {
  wwcBoxScore: WwcBoxScore;

  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private service: WwcService) {}

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.service.getBoxScore(gameId).subscribe(
      boxScore => {
        this.wwcBoxScore = boxScore;
      },
      err => console.log(err)
    );
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }
}
