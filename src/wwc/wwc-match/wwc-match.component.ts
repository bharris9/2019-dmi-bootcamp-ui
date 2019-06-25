import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WwcBoxScore } from '../wwc.model';
import { WwcService } from '../wwc.service';

@Component({
  selector: 'app-wwc-match',
  templateUrl: './wwc-match.component.html',
  styleUrls: ['./wwc-match.component.scss']
})
export class WwcMatchComponent implements OnInit {
  wwcBoxScore: WwcBoxScore;

  constructor(private route: ActivatedRoute, private service: WwcService) { }

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.service.getBoxScore(gameId).subscribe(
      boxScore => {
        this.wwcBoxScore = boxScore;
      },
      err => console.log(err)
    );
  }

}
