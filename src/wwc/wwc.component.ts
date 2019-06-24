import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WwcScore } from './wwc.model';
import { WwcService } from './wwc.service';

@Component({
  selector: 'app-wwc',
  templateUrl: './wwc.component.html',
  styleUrls: ['./wwc.component.scss']
})
export class WwcComponent implements OnInit {
  wwcScores: WwcScore[] = [];

  constructor(private service: WwcService, private router: Router) {}

  ngOnInit() {
    this.service.getScores().subscribe(
      scores => {
        this.wwcScores = scores;
      },
      err => console.log(err)
    );
  }

  handleBoxClick(gameId: number) {
    this.router.navigateByUrl('/wwc/' + gameId);
  }
}
